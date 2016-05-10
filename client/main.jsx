import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import Header from '../imports/ui/header.jsx';

Meteor.startup(()=>{
  render(<Header />, document.getElementById('mainMenu'));
  render(<App />, document.getElementById('render-target'));
});
