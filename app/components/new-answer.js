import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        post: this.get('post')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
      content: this.set('content', '');
      author: this.set('author', '');
    }
  }
});
