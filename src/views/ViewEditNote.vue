<template>
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
import { useRoute } from "vue-router";
import AddEditNote from "@/components/notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/storeNotes";

const route = useRoute();
const store = useStoreNotes();
const note = reactive({ ...store.getNote(route.params.id) });
</script>
