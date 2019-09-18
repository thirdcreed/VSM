import React, { Component, Fragment, useState } from 'react'
import  { gql } from 'apollo-boost'
import { useQuery } from 'react-apollo-hooks';
import { Button } from 'semantic-ui-react';
import Demo from './Demo';
import Canvas from './Canvas';


const OrgsPage = (props) => {
  const { loading, error, data } = useQuery(ORGS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <Fragment>
        <Button icon="list" onClick={()=> props.toggleVisibility(true)}></Button>
        <h1>Organizations</h1>
        {console.log({data, props})}
      
        { data.orgs &&
          data.orgs.map((org,i) => (

            <div>
              {org.id}  
            </div>
          ))}
          

     <Canvas
      renderOnChange={true}
      passOnProps={true}
      width={2000}
      height={2000}
      scale={1}
      scaleFactor={1.01}
      >   
       <Demo></Demo>
      </Canvas>
       

      

      </Fragment>
    )
}

export default OrgsPage;

const ORGS_QUERY = gql`
  query OrgQuery {
    orgs{
    id
    operations {
      id
      operations {
        operations {
          id
        }
      }
    }
  }
  }
`
