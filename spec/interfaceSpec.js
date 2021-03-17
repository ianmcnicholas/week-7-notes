'use strict';

describe('interface', () => {
  describe('storeNote', () => {
    it('stores note in local storage', () => {
      notebook.create('Test Note');
      storeNote();
      expect(localStorage.getItem('0')).toEqual('Test Note');
      localStorage.clear();
    });
  });

  describe('getNotes', () => {
    it('note in local storage', () => {
      notebook.create('Test Note');
      storeNote();
      expect(notebook.notes).toInclude('Test Note');

      notebook.notes = []
      getNotes()
      expect(notebook.notes).toInclude('Test Note');
    });
  });
});
