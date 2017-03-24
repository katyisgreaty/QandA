import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    update(answer, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          answer.set(key,params[key]);
        }
      });
      answer.save();
      this.transitionTo('question-detail');
    },
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question-detail');
    },
    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
