import Ember from 'ember';

export default Ember.Component.extend({
  areNotesShowing: false,
  updateQuestionForm: false,
  actions: {
    notesShow: function() {
      this.set('areNotesShowing', true);
    },
    notesHide: function() {
      this.set('areNotesShowing', false);
    }
  }
});
