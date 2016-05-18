import React, { Component, PropTypes } from 'react';

export default class Message extends Component {
  render() {
    var postDate = this.props.message.createdAt;
    return (
      <li><b>{this.props.message.username} </b><i>{postDate.getFullYear()}-{postDate.getMonth()}-
        {postDate.getDate()}: </i>
        {this.props.message.text}
        <hr />
      </li>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};
