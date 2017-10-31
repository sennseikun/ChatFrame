import React from 'react';
import '../css/Chat.css';

class ChatHeader extends React.Component {

    render() {

        return (
          <div className="chat-header">
            Chatting with {this.props.name}
          </div>
        );
    }
}

export default ChatHeader;
