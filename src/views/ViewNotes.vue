<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            v-model="newNote.content"
            placeholder="Add a new note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            class="button is-link has-background-success"
            @click="addNote"
            :disabled="!newNote.content"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>
    <div v-for="note in notes" class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { v4 as uuidv4 } from "uuid";

const notes = reactive([
  {
    id: uuidv4(),
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam",
  },
  {
    id: uuidv4(),
    content: "This is a shorter note!",
  },
]);

const newNote = reactive({});
const newNoteRef = ref(null);

const addNote = () => {
  notes.unshift({
    id: uuidv4(),
    content: newNote.content,
  });

  newNote.content = "";
  newNoteRef.value.focus();
};
</script>
