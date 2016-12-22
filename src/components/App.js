import React from 'react';
import Login from './Login';
import Login from './PageList';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: USER
        }
    }
    
    setUser = (user) => {
        this.setState({
            user: user
        });
    }

    render() {
        return <div>
            <div className="row">
                <div className="nine columns">
                    {this.props.children}                   
                </div>
                <div className="three columns">
                    <h1> Pages </h1>
                    
                    <Login user={this.state.user} 
                            setUser={this.setUser}/>
                    <PageList user={this.state.user} />
                </div>
            </div>
        </div>;
    }
}
