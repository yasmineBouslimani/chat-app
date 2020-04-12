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
                <div className="status">
                    <div className="textuel">
                        <h4 className="name">{this.props.firstname} {this.props.lastname}</h4>
                    </div>
                    <div className="status"
                         onClick={event => {
                             const newStatus = !this.state.online;
                             this.setState({
                                     online: newStatus
                                 }
                             );
                         }}>
                        <span
                            className={this.state.online ? 'status-online' : 'status-offline'}

                        ></span>
                        <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;

