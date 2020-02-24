import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { message: "" };

  }

  handleChange = (event) => {
    const newState = { message: event.target.value }
    this.setState(newState) 
}

  render() {
    const charsLeft = this.props.maxChars - this.state.message.length 

    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange} />
        <h3> Remaining chars: {charsLeft} </h3>      </div>
    );
  }
}

export default TwitterMessage;
