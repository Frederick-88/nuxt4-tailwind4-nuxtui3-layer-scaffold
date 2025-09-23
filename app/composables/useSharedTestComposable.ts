export default function useSharedTestComposable() {
  function init() {
    console.log("layer composable - init");
  }

  function showConfetti() {
    console.log("layer composable - show");
  }

  return { init, showConfetti };
}
