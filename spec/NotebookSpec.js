describe('Notebook', function() {
  var notebook
  describe('#create', function() {

    it('adds a note to notes', function() {
      notebook = new Notebook
      notebook.create("test note 1");
      expect(notebook.notes[0]).toEqual("test note 1");
    });
  });

  describe('preview', function () {
    it('shows first 20 characters of note', function() {
      notebook = new Notebook
      notebook.create("abc, abc, abc, abc, this should not appear");
      expect(notebook.previews()[0]).toEqual('abc, abc, abc, abc, ');
    });
  });
});
