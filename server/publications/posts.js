import {Posts, Comments} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('posts.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1, createdAt: 1, content: 1, author: 1, likeCount: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return Posts.find(selector, options);
  });

  Meteor.publish('posts.single', function (postId) {
    check(postId, String);
    const selector = {_id: postId};
    return Posts.find(selector);
  });

  Meteor.publish('posts.comments', function (postId) {
    check(postId, String);
    const selector = {postId};
    const options = {
      fields: {_id: 1, title: 1, createdAt: 1, text: 1, author: 1, likeCount: 1, saving: 1},
      sort: {createdAt: -1},
      limit: 25
    };

    return Comments.find(selector);
    //return Comments.find(selector, options);

  });
}
