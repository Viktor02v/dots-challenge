import { onMounted, onUnmounted } from 'vue';
import { useDotStore } from '@/stores/dotStore'; // Adjust the path as necessary

export function useDotEvents() {
const dotStore = useDotStore();

onMounted(() => {
   window.addEventListener('click', dotStore.getPositions);
   window.addEventListener('click', dotStore.addDot);
});

onUnmounted(() => {
   window.removeEventListener('click', dotStore.getPositions);
   window.removeEventListener('click', dotStore.addDot);
});
}