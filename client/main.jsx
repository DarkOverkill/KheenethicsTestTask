import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Header from '../imports/ui/header.jsx';
import EditInfo from '../imports/ui/EditInfo.jsx';
import '../imports/startup/accounts-config.js';

Meteor.startup(()=>{
  render(<App />, document.getElementById('render-messages'));
  render(<Header />, document.getElementById('mainMenu'));
  render(<EditInfo />, document.getElementById('render-editInfo'));
});
