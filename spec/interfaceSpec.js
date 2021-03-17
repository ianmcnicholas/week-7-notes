'use strict';

function cleanTestEnv() {
  localStorage.clear();
  notebook.notes = [];
}

describe('interface', () => {
  describe('storeNote', () => {
    it('stores note in local storage', () => {
      cleanTestEnv();

      notebook.create('Test Note');
      storeNote();
      expect(localStorage.getItem('0')).toEqual('Test Note');
    });
  });

  describe('getNotes', () => {
    it('note in local storage', () => {
      cleanTestEnv();

      localStorage.clear();
      notebook.create('Test Note');
      storeNote();
      expect(notebook.notes).toInclude('Test Note');

      notebook.notes = []
      getNotes()
      expect(notebook.notes).toInclude('Test Note');
      localStorage.clear();
      notebook.notes = []
    });

    it('does nothing if storage is empty', () => {
      cleanTestEnv();

      localStorage.clear();
      getNotes()
      expect(notebook.notes.length).toEqual(0);
      localStorage.clear();
    });
  });
});
