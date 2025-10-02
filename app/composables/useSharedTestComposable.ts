export default function useSharedTestComposable() {
  function layerInit() {
    console.log("layer composable - layerInit");
  }

  return { layerInit };
}
