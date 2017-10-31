import React from 'react';
import '../css/Chat.css';

class ReceiveMessage extends React.Component {

    render() {

        return (
          <div className="receive-message">
            {this.props.owner}{': '}
            {this.props.text}
          </div>
        )
    }
}

export default ReceiveMessage;
