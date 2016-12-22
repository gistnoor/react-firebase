import React from 'react';
import * as API from '../api';

export default class Login extends React.Component{
   
    signin = (event) => this.sign('in', event);
    
    signup = (event) => this.sign('up', event);

    sign = (name, event) => {
        let username = React.findDOMNode(this.refs.username).value,
            password = React.findDOMNode(this.refs.password).value;
        API['sign' + name](username, password)
            .then(data => this.props.setUser(data.user));
    }

    signout = (event) => API.signout().then(data => this.props.setUser(null));

    render() {
        if (this.props.user)
            return <div className="row">
                <p> Hi {this.props.user.username}! </p>
                <p><button onClick={this.signout}> Sign Out </button></p>
            </div>;
        return <div className="row">
            <p><input className="u-full-Width" placeholder="Username" ref="username" type="text" /></p>
            <p><input className="u-full-Width" placeholder="Password" ref="password" type="password" /></p>
            <p>
                <button onClick={this.signin}>Sign In</button>
                <button onClick={this.signup}>Sign Up</button>
            </p>
        </div>
    }
}
