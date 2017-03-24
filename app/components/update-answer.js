import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(question) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', question, params);
    }
  }
});
