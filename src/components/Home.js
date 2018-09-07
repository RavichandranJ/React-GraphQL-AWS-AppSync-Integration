import React, { Component } from 'react';
import JobList from './JobList';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
             <JobList />
          </div>
        );
    }
}

export default Home;