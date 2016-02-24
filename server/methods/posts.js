import {Posts, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {

  Meteor.methods({
    'posts.create'(_id, title, content) {
      check(_id, String);
      check(title, String);
      check(content, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const post = {_id, title, content, createdAt, author: Meteor.userId()};
      Posts.insert(post);
    }
  });

  Meteor.methods({
    'posts.like'(id) {
      check(id, String);
      const userId = Meteor.userId();
      // XXX: Do some user authorization
      let obj = {}
      obj['likes'] = {}
      obj['likes'][userId] = true;
      //console.log(`push obj: ${JSON.stringify(obj)}`);
      Posts.update(id, {"$set": obj})
      obj = {}
      obj['likeCount'] = 1
      //console.log(`set obj: ${JSON.stringify(obj)}`);
      Posts.update(id, {"$inc": obj})
    }
  });

  Meteor.methods({
    'comments.like'(id) {
      check(id, String);
      const userId = Meteor.userId();
      // XXX: Do some user authorization
      let obj = {}
      obj['likes'] = {}
      obj['likes'][userId] = true;
      console.log(`push obj: ${JSON.stringify(obj)}`);
      Comments.update(id, {"$set": obj})
      obj = {}
      obj['likeCount'] = 1
      //console.log(`set obj: ${JSON.stringify(obj)}`);
      Comments.update(id, {"$inc": obj})
    }
  });

  Meteor.methods({
    'posts.createComment'(_id, postId, text) {
      check(_id, String);
      check(postId, String);
      check(text, String);

      // Show the latency compensations
      Meteor._sleepForMs(500);

      // XXX: Do some user authorization
      const createdAt = new Date();
      const author = 'The User';
      const comment = {_id, postId, author, text, createdAt};
      Comments.insert(comment);
    }
  });
}
