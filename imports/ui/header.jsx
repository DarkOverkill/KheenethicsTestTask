import React, { Component, PropTypes } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Messages } from '../api/messages.js';

export default class Header extends Component {
  showEditBlock(){
    $('#editBlock').show();
  }

  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Broadcast application</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              {this.props.currentUser ?
                <li><a href="#" data-toggle="modal" data-target="#modal-reg" name="editProfile" onClick={this.showEditBlock}><span className="glyphicon glyphicon-user"></span>Edit Profile</a></li>
                : ''
              }
              <li><a href="#" data-toggle="modal" data-target="#modal-login"><AccountsUIWrapper /></a></li>
            </ul>
          </div>
        </div>
      </div>);
  }
};
Header.PropTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
  }
}, Header);
