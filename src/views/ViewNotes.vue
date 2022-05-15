<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote.content"
      ref="addEditNoteRef"
      placeholder="Add a new note"
    >
      <template v-slot:buttons>
        <button
          @click="addNote"
          :disabled="!newNote.content"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>
    <Note
      v-for="note in store.notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
    />
  </div>
</template>

<script setup>
import AddEditNote from "@/components/notes/AddEditNote.vue";
import Note from "@/components/notes/Note.vue";

import { ref, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const store = useStoreNotes();
const newNote = reactive({ content: "" });
const addEditNoteRef = ref(null);

const addNote = () => {
  store.addNote(newNote);
  newNote.content = "";
  addEditNoteRef.value.focusTextarea();
};

const deleteNote = (id) => {
  store.deleteNote(id);
};
</script>
