import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import Message from './Message.jsx';

export default class App extends Component {
  todo() {
    var text = $('textarea')[0].value.trim();
    Meteor.call('messages.insert', text);
    $('textarea')[0].value = '';
  }

  renderMessages() {
    return this.props.messages.map((msg) => {
      if(this.props.currentUser.profile.location == msg.location){
        return (<Message key={msg._id} message={msg} />)}
      return;
    });
  }

  render() {
    return (
      <span>
      <div className="col-md-6 col-sm-6">
        <div className='msgBox'>
          <header>
            <h1>Messages <i>({this.props.currentUser ? this.props.currentUser.profile.location : ''})</i></h1>
          </header>

          <ul>
            {this.renderMessages()}
          </ul>
        </div>
        <textarea className='toSend'> </textarea>
        <input type='button' value="Send" onClick={this.todo.bind(this)}/>
      </div>
      <div className="col-md-6 col-sm-6" id="render-editInfo">
      </div>
      </span>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('messages');
  return {
    messages: Messages.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
