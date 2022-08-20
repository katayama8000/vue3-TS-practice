import { computed, ref, watch } from "vue";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = ref(callback);

  // Remember the latest callback if it changes.
  watch(callback, () => {
    savedCallback.value = callback;
  });

  // Set up the interval.
  watch(delay, () => {
    // Don't schedule if no delay is specified.
    if (delay === null) {
      return;
    }
    const id = setInterval(() => savedCallback.value, delay);
    return () => clearInterval(id);
  });
};

export default useInterval;
