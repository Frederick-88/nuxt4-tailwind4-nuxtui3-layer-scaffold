export default function useSharedChildTestComposable() {
  function init() {
    console.log("layer child composable - init");
  }

  function showConfetti() {
    console.log("layer child composable - show");
  }

  return { init, showConfetti };
}
