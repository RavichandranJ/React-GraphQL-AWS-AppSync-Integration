import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import JobIRenderer from './JobIRenderer'
import Search from './Search';

export default class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: "sample data" };
    }
    render() {
        return (
            <Query
                query={GET_JOBS}
            >
                {({ loading, error, data, refetch }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return (
                        <div>
                            <Search click={(txt) => {
                                console.log("[JobList] refetch")
                                refetch({ search: txt })}
                            }  />
                            {
                                data.listJobs.items.map(vo => {
                                    return <JobIRenderer key={vo.id} vo={vo} />
                                })
                            }

                        </div>


                    )
                }}
            </Query>
        );
    }
}

export const GET_JOBS = gql`
query ($search:String=" "){
    listJobs(limit: 110, filter: {
      title: {
        contains: $search
      }
    }){
      items {
        id,
        title2,
        pubDate,
        city,
        state,
        jobid                       
      }
    }
  }                 
`