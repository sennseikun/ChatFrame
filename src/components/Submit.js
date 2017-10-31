import React from 'react';
import '../css/Chat.css';

class Submit extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.props.addMessage(this.state.value, this.props.isYou, this.props.owner);
      this.state.value = "";
      event.preventDefault();
    }

    render() {

        return (
          <div className="submit">
            <form onSubmit={this.handleSubmit}>
              <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Write message here" maxlength="50"/>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
    }
}

export default Submit;
