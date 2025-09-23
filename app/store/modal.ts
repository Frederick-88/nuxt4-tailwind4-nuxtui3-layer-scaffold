import { defineStore } from "pinia";

export type SharedModalStoreState = { modals: Record<string, boolean> };

export const useSharedModalStore = defineStore("sharedModal", {
  state: (): SharedModalStoreState => ({
    modals: {},
  }),

  actions: {
    openModal(modal: string) {
      const modalStore = useSharedModalStore();
      const walletStore = useSharedWalletStore();
      console.log("layer - triggered", modal);

      walletStore.setWallet("metamask");

      modalStore.$patch({
        modals: { ...modalStore.modals, [modal]: true },
      });
    },

    closeModal(modal: string) {
      const modalStore = useSharedModalStore();

      modalStore.$patch({
        modals: { ...modalStore.modals, [modal]: false },
      });
    },

    closeAll() {
      const modalStore = useSharedModalStore();

      modalStore.modals = {};
    },
  },
});
