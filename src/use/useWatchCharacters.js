import { watch } from "vue";

export function useWatchCharacters(valueToWatch, maxLength) {
  watch(valueToWatch, (newValue) => {
    if (newValue.content.length === maxLength) {
      alert(`Note is too long! ${maxLength} characters max.`);
    }
  });
}
