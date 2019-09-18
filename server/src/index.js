const { GraphQLServer } = require('graphql-yoga')
// const { prisma } = require('./generated/prisma-client')
const low = require('lowdb')

const FileSync = require('lowdb/adapters/FileSync') 
const adapter = new FileSync('db.json');
const db = low(adapter)
const uuid = require('uuidv4').default;
const _ = require('lodash');
const lodashId = require('lodash-id');
_.mixin(lodashId);

db._.mixin({
  upsert: function(collection, obj, key) {
    key = key || 'id';
    for (var i = 0; i < collection.length; i++) {
      var el = collection[i];
      if(el[key] === obj[key]){
        collection[i] = obj;
        return collection;
      }
    };
    collection.push(obj);
  },
  resolve: function(collection, key, resolveCollection ){
    let returns = [];
    for (var i = 0; i < collection[key].length; i++) {
      var id = collection[i];
      returns = resolveCollection.find(el => el.id == id);
    }
    return returns;
  }
});

db.defaults({ users: [], orgs: []})
  .write()

const resolvers = {
  Query: {
    user: (parent, { id }, context) => {
      let user = context.db.get('users')
      .find({id})
      .value()
    },
    users: (parent, { id }, context) => {
      return context.db.get('users')
      .value()
    },
    org: (parent, {id}, context) => {
      let orgs = context.db.get('orgs').value();
      console.log({id});
      let org = _.getById(orgs,id);
      let operations  = org.operations.map(_id => _.getById(context.db.get('orgs').value(),_id));
      let members  = org.members.map(_id => _.getById(context.db.get('users').value(),_id));

      console.log({operations:operations})

      return Object.assign({}, org, {operations,members});


    },
    orgs: (parent, {}, context) => {
      console.log(context.db)
      let orgs = context.db.get('orgs').value();
      return orgs.map(org => {
        let operations  = org.operations.map(_id => _.getById(context.db.get('orgs').value(),_id));
        let members  = org.members.map(_id => _.getById(context.db.get('users').value(),_id));
        return Object.assign({}, org, {operations,members});
      }) 
    },
  },
  Mutation: {
    createUser: (parent, { handle, email }, context) => {
      let user = {id:uuid(), handle ,email}
      context.db.get('users')
      .upsert(user)
      .write()
      return user
    },
    createOrg: (parent, { name }, context) => {
      let org = {id:uuid(),name, members:[], operations:[]}
      context.db.get('orgs')
      .upsert(org)
      .write()
      return org
    },
    addMember: (parent, { orgName, userId }, context) => {
      let user = db.get('users')
        .find({id: userId})
        .value()
      let members = db.get('orgs')
        .find({name:orgName})
        .value().members;
      members.push(userId);
      context.db.get('orgs')
      .find({name:orgName})
      .assign({members})
      .write();
      return user;
    },
    addOperation: (parent, { parentOrgId, childOrgId }, context) => {
      let parentOrg = context.db.get('orgs')
      .find({id:parentOrgId});

      let operations = parentOrg
        .value()
        .operations;
        console.log(operations);
      operations.push(childOrgId);
      parentOrg
        .assign({operations})
        .write();

      return childOrgId;
    }
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    db
   //prisma
  },
})



server.start(() => console.log('Server is running on http://localhost:4000'))


