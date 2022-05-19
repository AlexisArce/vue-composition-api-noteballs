<template>
  <div class="modal p-2" :class="{ 'is-active': modelValue }">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="deleteNote">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  note: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const store = useStoreNotes();

const closeModal = () => {
  emit("update:modelValue", false);
};

const deleteNote = () => {
  store.deleteNote(props.note.id);
};

const modalCardRef = ref(null);
onClickOutside(modalCardRef, closeModal);

const handleKeyboard = (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyboard);
});
</script>
