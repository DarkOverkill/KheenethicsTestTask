import '../imports/api/messages.js';

import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function(options, user){
  var defaultLocation = "Earth";
  profile = {
    location: defaultLocation,
  }
  user.profile = profile;
  return user;
});
