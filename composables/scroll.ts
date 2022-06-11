export const useScroll = () => {
  const scrollPosition = ref(null);

  const updateScroll = () => {
    scrollPosition.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return {
    scrollPosition,
  };
};
