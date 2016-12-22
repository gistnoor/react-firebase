import React from 'react';
import * as API from '../api';

export default class PageList extends React.Component{
    constructor() {
        super();
        this.state = {
            newPageTitle: ''
        }
    }

    update = (event) => this.setState({
        newPageTitle: event.target.value;
    });

    createPage = (event) => {
        if (event.charCode !== 13) 
            return;
        API.pages.push({ this.state.newPageTitle });
        this.setState({
            newPageTitle: ''
        });
    }

    render() {
        return <div>
            {this.props.user} ? 
            <input type="text"
                className="u-full-width"
                value="this.state.newPageTitle"
                placeholder="New Page Title"
                onChange={this.update}
                onKeyPress={this.createPage} />
            : null;
        </div>
    }
}
