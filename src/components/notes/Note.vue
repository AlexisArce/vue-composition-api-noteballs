<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink class="card-footer-item" :to="`/edit-note/${note.id}`"
        >Edit</RouterLink
      >
      <a href="#" class="card-footer-item" @click.prevent="handleDeleteClicked"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
import { computed, defineEmits } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["deleteClicked"]);

const characterLength = computed(() => {
  const length = props.note.content.length;
  return length > 1 ? `${length} characters` : `${length} character`;
});

const handleDeleteClicked = () => {
  emit("deleteClicked", props.note.id);
};
</script>
