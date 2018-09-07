import React, { Component } from 'react';

export default class JobIRenderer extends Component {
    render() {
      return (        
        <div className="container border-top py-3">
          <div className="row d-flex">
            <div className="col-12 col-sm-8">
              <div>
                <h5>{this.props.vo? this.props.vo.title2 : ''}</h5>                
                <div className="row">
                  <div className="col-12 col-sm-4 py-1">
                    <i className="fa fa-map-marker text-secondary" /> {this.props.vo ? this.props.vo.city : ''}, {this.props.vo ? this.props.vo.state : ''}
                  </div>
                  <div className="col-12 col-sm-4 py-1">
                    <i className="fa fa-calendar-o text-secondary" /> {this.props.vo ? this.props.vo.pubDate : ''} </div>                  
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-2 align-self-center">Job Id:
              <span className="text-primary">#{this.props.vo ? this.props.vo.jobid : ''}</span>
            </div>
            <div className="col-8 col-sm-2 align-self-center">            
            <a href={'./job-description/' + this.props.vo.id} className="btn btn-sm btn-outline-primary">View Job</a>
            </div>
          </div>
        </div>        
      );
    }
  };