import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    // saveAnswer(params) {
    //   var newAnswer = this.store.createRecord('answer', params);
    //   newAnswer.save();
    //   this.transitionTo('question-detail');
    // },
  }
});
