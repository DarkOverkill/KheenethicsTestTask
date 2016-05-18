import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import {userEdit} from '../api/messages.js';

export default class EditInfo extends Component {
  hideEditBlock(){
    $('#editBlock').hide();
  }
  changeUsername(){
    var username = $('#newUsername').val();
    $('#newUsername').val('');
    Meteor.call('username.change', username);
  }

  changeEmail(){
    var email = $('#newEmail').val();
    $('#newEmail').val('');
    Meteor.call('email.change', email);
  }

  render() {
    return (
      <span id='editBlock' hidden>

      <div className='row'>
        <div className='col-md-11 col-sm-11'>
        </div>
        <div className='col-md-1 col-sm-1'>
          <button className="delete" onClick={this.hideEditBlock}>&times;</button>
        </div>
      </div>

        <div className='row'>
          <div className='col-md-4 col-sm-4'>
            <h4>Username:</h4>
          </div>
          <div className='col-md-8 col-sm-8'>
          {this.props.currentUser ?
            <input type='text' id='newUsername' placeholder={this.props.currentUser.username} /> : ''}
            <button onClick={this.changeUsername}><span className='glyphicon glyphicon-pencil'></span></button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4 col-sm-4'>
            <h4>Email:</h4>
          </div>
          <div className='col-md-8 col-sm-8'>
          {this.props.currentUser ?
            <input type='text' id='newEmail' placeholder={this.props.currentUser.emails[0].address} /> : ''}
            <button onClick={this.changeEmail}><span className='glyphicon glyphicon-pencil'></span></button>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-4 col-sm-4'>
            <h4>Location:</h4>
          </div>
          <div className='col-md-8 col-sm-8'>
          {this.props.currentUser ?
            <input type='text' id='newLocation' placeholder={this.props.currentUser.location}/> : '' }
            <button onClick={this.changeUsername}><span className='glyphicon glyphicon-pencil'></span></button>
          </div>
        </div>
      </span>
    );
  }
};


EditInfo.PropTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  }
}, EditInfo);
