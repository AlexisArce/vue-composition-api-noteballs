import { defineStore } from "pinia";
import { v4 as uuidv4 } from "uuid";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: uuidv4(),
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam",
        },
        {
          id: uuidv4(),
          content: "This is a shorter note!",
        },
      ],
    };
  },
  actions: {
    addNote(newNote) {
      this.notes.unshift({
        id: uuidv4(),
        content: newNote.content,
      });
    },
    deleteNote(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      this.notes.splice(index, 1);
    },
    getNote(id) {
      const index = this.notes.findIndex((note) => note.id === id);
      return this.notes[index];
    },
  },
});
