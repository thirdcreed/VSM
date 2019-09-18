import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import ApolloClient from 'apollo-boost';
import MainPage from './components/MainPage'

import 'semantic-ui-css/semantic.min.css';

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
  <ApolloHooksProvider client={client}>
    <Router>
      <Fragment>    
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
      </Fragment>
    </Router>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)
