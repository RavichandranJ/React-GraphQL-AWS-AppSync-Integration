import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import appSyncConfig from "./../AppSync";
import { ApolloProvider } from "react-apollo";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import Home from './Home';
import JobDescription from './JobDescription'

export default class Main extends Component {


    render() {

        const App = () => (
            <Router>
              <div>
                <Route exact={true} path="/" component={Home} />
                <Route path="/job-description/:id" component={JobDescription} />                
              </div>
            </Router>
          );

        const client = new AWSAppSyncClient({
            url: appSyncConfig.graphqlEndpoint,
            region: appSyncConfig.region,
            auth: {
                type: appSyncConfig.authenticationType,
                apiKey: appSyncConfig.apiKey,
            },
            disableOffline: false
        });

        return (
            <ApolloProvider client={client}>
                <Rehydrated>
                    <App />
                </Rehydrated>
            </ApolloProvider>
        );
    }
}

