describe('Notes', function() {
  var notebook = new Notebook
  describe('#create', function() {

    it('adds a not to the object with an ID', function() {
      notebook.create("test note 1");
      expect(notebook.notes[1]).toEqual("test note 1");
    });

  });
});
