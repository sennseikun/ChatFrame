import React from 'react';
import '../css/Chat.css';
import ChatHeader from './ChatHeader.js';
import MessageContainer from './MessageContainer.js';
import Submit from './Submit.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ChatFrame extends React.Component {

    name = "Thomas"

    constructor( props, context ) {

      super( props, context );
      this.state = {
        messages: [

        ]
      }
      this.addMessage = this.addMessage.bind( this );
    }

    addMessage(message, isYou, owner){

      if(message != ''){
        let yourMessage = {
            id: this.state.messages.length + 1,
            owner: owner,
            text: message,
            isYou: isYou
        };

        let items = this.setState({ messages: [yourMessage, ...this.state.messages]});
        {items}
      }
    }

    render() {

      let items = [...this.state.messages].map( m =>
        <MessageContainer owner= {m.owner}
          text={m.text}
          isYou={m.isYou}
          />
      );


      return (
          <div className="container">
            <ChatHeader name={this.name} />
              <div className='chat-frame'>
                  {items}
              </div>
            <Submit addMessage = {this.addMessage} isYou = {true} owner="You"/>
            <Submit addMessage = {this.addMessage} isYou = {false} owner ="Thomas"/>
          </div>
        )
    }
}

export default ChatFrame;
