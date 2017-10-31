import React from 'react';
import '../css/Chat.css';
import SendMessage from './SendMessage.js';
import ReceiveMessage from './ReceiveMessage.js';

class MessageContainer extends React.Component {

    constructor( props, context ) {
      super( props, context );
    }

    PickComponent(){
      if(this.props.isYou){
        return (
          <div className="send-container">
            <SendMessage owner={this.props.owner} text={this.props.text}/>
          </div>
        )
      }
      else{
        return (
          <div className="receive-container">
            <ReceiveMessage owner={this.props.owner} text={this.props.text}/>
          </div>
        )
      }
    }

    render() {

        return (
          <div>{this.PickComponent()}</div>
        );
    }
}

export default MessageContainer;
