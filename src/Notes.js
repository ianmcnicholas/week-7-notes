class Notebook {
  constructor() {
    this.notes = {};
    this.idCount = 1
  };
  create(note) {
    this.notes[this.idCount] = note
    this.idCount ++
  }


};
