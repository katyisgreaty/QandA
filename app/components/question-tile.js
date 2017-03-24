import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  actions: {
    notesShow: function() {
      this.set('areNotesShowing', true);
    },
    notesHide: function() {
      this.set('areNotesShowing', false);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
