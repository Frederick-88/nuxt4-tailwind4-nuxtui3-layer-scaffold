import { defineStore } from "pinia";

export type SharedWalletStoreState = { wallets: Record<string, any> };

export const useSharedWalletStore = defineStore("sharedWallet", {
  state: (): SharedWalletStoreState => ({
    wallets: {},
  }),

  actions: {
    setWallet(walletId: string) {
      const walletStore = useSharedWalletStore();
      console.log("layer - triggered", walletId);

      walletStore.$patch({
        wallets: { ...walletStore.wallets, [walletId]: true },
      });
    },

    resetWallet(walletId: string) {
      const walletStore = useSharedWalletStore();

      walletStore.$patch({
        wallets: { ...walletStore.wallets, [walletId]: false },
      });
    },

    resetAll() {
      const walletStore = useSharedWalletStore();

      walletStore.wallets = {};
    },
  },
});
