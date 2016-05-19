import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages')

if(Meteor.isServer){
  Meteor.publish('messages', function messagesPublish() {
    return Messages.find();
  });
}

Meteor.methods({
  'username.change'(username) {
    check(username, String);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    if(username.length < 3) {
      throw new Meteor.Error('too short');
    }

    Meteor.users.update(this.userId, {$set: {username: username}});
  },

  'email.change'(email) {
    check(email, String);
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }
    Meteor.users.update(this.userId, {$set: {"emails.0": {"address": email}}});
  },

  'location.change'(location) {
      Meteor.users.update(this.userId, {$set: {profile: {location: location}}});
  },

  'messages.insert'(text) {
    check(text, String);

    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
        text,
        createdAt: new Date(),
        owner: this.userId,
        username: Meteor.users.findOne(this.userId).username,
        location: Meteor.users.findOne(this.userId).location,
    });
  },
});
