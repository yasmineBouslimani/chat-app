import React from 'react';
import './avatar.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: this.props.online
        };
    }
    render() {
        return (
            <div className="Contact">
                <img className="avatar" src={this.props.image} alt="avatar"/>
                    <div className="textuel">
                        <h4 className="name">{this.props.firstname} {this.props.lastname}</h4>
                    </div>

                    <div className="status"
                         onClick={event => {
                             const newOnline = !this.state.online;
                             this.setState({online: newOnline});
                         }}>
                        <div className="flex">
                        <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{this.props.online ? "Online" : "Offline"}</p>
                    </div>
                    </div>
                </div>
        );
    }
}
export default Contact;

