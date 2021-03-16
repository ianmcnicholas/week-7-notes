class Notebook {
  constructor() {
    this.notes = [];
  };
  create(note) {
    this.notes.push(note);
  };

  previews() {
    return this.notes.map(notes => notes.substring(0, 20))
  };

};
