import { computed } from 'vue';
import { useRoute } from 'vue-router';

const useCurrentPage = () => {
  const route = useRoute();
  return computed(() => {
    const page = route.query.page as string;
    return Number.parseInt(page || '1');
  });
};

export default useCurrentPage;
