<template>
  <div class="edit-note">Edit note {{ $route.params.id }}</div>
  <AddEditNote
    v-model="note.content"
    bgColor="link"
    placeholder="Edit note"
    label="Edit note"
    ref="addEditNoteRef"
  >
    <template v-slot:buttons>
      <button @click="$router.back()" class="button is-link is-light mx-2">
        Cancel
      </button>
      <button
        @click="saveNote"
        :disabled="!note.content"
        class="button is-link"
      >
        Save Note
      </button>
    </template>
  </AddEditNote>
</template>

<script setup>
import { reactive } from "vue";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { RouterLink } from "vue-router";

const store = useStoreNotes();
const note = reactive({ content: "" });
</script>
