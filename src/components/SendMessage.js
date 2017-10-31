import React from 'react';
import '../css/Chat.css';

class SendMessage extends React.Component {

    render() {

        return (
          <div className="send-message">
            {this.props.owner}{': '}
            {this.props.text}
          </div>
        )
    }
}

export default SendMessage;
