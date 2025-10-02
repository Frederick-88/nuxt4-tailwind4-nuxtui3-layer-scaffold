import useSharedChildTestComposable from "./child/useSharedChildTestComposable";

function useSharedTestComposable() {
  function layerInit() {
    console.log("layer composable - layerInit");
  }

  return { layerInit };
}

// source: https://nuxt.com/docs/4.x/guide/directory-structure/app/composables#how-files-are-scanned
export { useSharedTestComposable, useSharedChildTestComposable };
