export default function useSharedChildTestComposable() {
  function layerChildInit() {
    console.log("layer child composable - layerChildInit");
  }

  return { layerChildInit };
}
