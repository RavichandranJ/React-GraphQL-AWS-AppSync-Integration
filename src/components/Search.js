import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {txt:''};
        this.clickHandler = this.clickHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }
    static propTypes = {
        click: PropTypes.func.isRequired
    }

    clickHandler(txt) {  
        console.log("clickHandler(), ", txt)          
          this.setState({txt})
    }

    searchHandler() {        
        console.log("searchHandler(), ", this.state.txt)
        this.props.click(this.state.txt);
    }

    render() {
        return (            
                <div className="container">
                    <div className="input-group py-2">
                        <input type="text" vaule={this.state.txt}
                            onChange={(e) => this.clickHandler(e.target.value)}
                            className="form-control" aria-label="Text input with dropdown button" placeholder="Search your job" />
                       
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button"
                            onClick={this.searchHandler}>Search</button>
                        </div>
                        
                    </div>
                </div>
                    );
    }
}