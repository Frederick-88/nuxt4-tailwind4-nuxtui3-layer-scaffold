<script lang="ts" setup>
// import { useSharedModalStore } from '@/store/modal';

const modalStore = useSharedModalStore();

const colors = ["primary", "secondary"];

const isOpen = ref(false);
const loading = ref(false);
const selectedColor = ref("primary");

const notifications = ref([
  {
    id: 1,
    title: "Welcome!",
    description: "Nuxt UI is working perfectly",
    color: "primary",
  },
  {
    id: 2,
    title: "Tailwind CSS",
    description: "All utility classes are available",
    color: "secondary",
  },
  {
    id: 3,
    title: "Components",
    description: "Nuxt UI components are ready to use",
    color: "primary",
  },
]);

const items = ref([
  {
    label: "Backlog",
    id: "backlog",
  },
  {
    label: "Todo",
    id: "todo",
  },
  {
    label: "In Progress",
    id: "in_progress",
  },
  {
    label: "Done",
    id: "done",
  },
]);

const value = ref("todo");

onMounted(() => {
  console.log("Component mounted, everything is set up!");
  modalStore.openModal("testModal");
});

const handleSubmit = async () => {
  loading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loading.value = false;
};
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-slate-950 dark:via-slate-900 dark:to-amber-950"
  >
    <header
      class="border-b border-transparent bg-gradient-to-r from-amber-500/10 via-transparent to-primary-500/10 dark:from-amber-400/10 dark:to-primary-400/10 backdrop-blur-md"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Layer Showcase — Alternate Look
            </h1>
            <p class="mt-2 text-gray-600 dark:text-gray-300">
              A different visual style to test auto-imports
            </p>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section class="text-center mb-16">
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium mb-8"
        >
          <UIcon name="i-heroicons-check-circle" class="w-4 h-4 mr-2" />
          Alternate theme active
        </div>

        <p>SharedModalStore content = {{ modalStore.modals }}</p>

        <h2
          class="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight"
        >
          Fresh Styles, Same Components
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          This layer uses a different aesthetic so you can verify auto-imports
          without confusing it with your consuming repo.
        </p>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <UCard
          class="shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <template #header>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Button Components
            </h3>
          </template>

          <div class="space-y-4">
            <div class="flex flex-wrap gap-3">
              <UButton color="primary">Primary</UButton>
              <UButton color="secondary">Secondary</UButton>
            </div>

            <div class="flex flex-wrap gap-3">
              <UButton variant="outline" color="primary">Outline</UButton>
              <UButton variant="soft" color="secondary">Soft</UButton>
              <UButton variant="ghost" color="primary">Ghost</UButton>
              <UButton variant="link" color="secondary">Link</UButton>
            </div>

            <div class="flex flex-wrap gap-3">
              <UButton size="xs">Extra Small</UButton>
              <UButton size="sm">Small</UButton>
              <UButton size="md">Medium</UButton>
              <UButton size="lg">Large</UButton>
            </div>

            <UButton :loading="loading" @click="handleSubmit" class="w-full">
              {{ loading ? "Processing..." : "Submit Form" }}
            </UButton>
          </div>
        </UCard>

        <UCard
          class="shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <template #header>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Form Components
            </h3>
          </template>

          <div class="space-y-4">
            <UInput placeholder="Enter your name" icon="i-heroicons-user" />
            <UInput
              placeholder="Email address"
              type="email"
              icon="i-heroicons-envelope"
            />
            <UTextarea placeholder="Your message..." />

            <USelect
              v-model="selectedColor"
              :items="
                colors.map((color) => ({
                  label: color.charAt(0).toUpperCase() + color.slice(1),
                  value: color,
                }))
              "
              placeholder="Select a color"
            />

            <USelectMenu
              v-model="value"
              value-key="id"
              :items="items"
              class="w-48"
            />

            <div class="flex items-center gap-3">
              <UCheckbox label="Accept terms" />
              <UCheckbox label="Subscribe to newsletter" />
            </div>

            <URadioGroup
              :items="[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]"
              class="space-y-2"
            />
          </div>
        </UCard>

        <UCard
          class="shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <template #header>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Notifications & Alerts
            </h3>
          </template>

          <div class="space-y-4">
            <UAlert
              icon="i-heroicons-information-circle"
              color="primary"
              variant="subtle"
              title="Information"
              description="This is an informational alert message."
            />

            <UAlert
              icon="i-heroicons-check-circle"
              color="success"
              variant="subtle"
              title="Success"
              description="Your action was completed successfully."
            />

            <UAlert
              icon="i-heroicons-exclamation-triangle"
              color="warning"
              variant="subtle"
              title="Warning"
              description="Please review this important information."
            />

            <div class="space-y-2">
              <div
                v-for="notification in notifications"
                :key="notification.id"
                class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                <div class="flex items-start gap-3">
                  <div
                    :class="`w-2 h-2 rounded-full mt-2 bg-${notification.color}-500`"
                  ></div>
                  <div>
                    <p class="font-medium text-gray-900 dark:text-white">
                      {{ notification.title }}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      {{ notification.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <UCard
          class="shadow-xl hover:shadow-2xl transition-shadow duration-300"
        >
          <template #header>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              Interactive Components
            </h3>
          </template>

          <div class="space-y-6">
            <div>
              <UButton @click="isOpen = true" color="primary">
                Open Modal
              </UButton>

              <UModal v-model:open="isOpen">
                <template #content>
                  <UCard>
                    <template #header>
                      <h3 class="text-lg font-semibold">Modal Example</h3>
                    </template>

                    <p class="text-gray-600 dark:text-gray-300 mb-4">
                      This is a beautiful modal component powered by Nuxt UI.
                    </p>

                    <template #footer>
                      <div class="flex justify-end gap-3">
                        <UButton variant="ghost" @click="isOpen = false"
                          >Cancel</UButton
                        >
                        <UButton @click="isOpen = false">Confirm</UButton>
                      </div>
                    </template>
                  </UCard>
                </template>
              </UModal>
            </div>

            <UProgress :value="75" color="primary" class="mb-4">
              <template #indicator="{ step }">
                <div class="text-right">
                  <span class="text-sm text-primary-500 dark:text-primary-400"
                    >{{ Math.round(step * 100) }}%</span
                  >
                </div>
              </template>
            </UProgress>

            <div class="flex items-center gap-4">
              <UBadge color="primary">Primary</UBadge>
              <UBadge color="success" variant="subtle">Success</UBadge>
              <UBadge color="warning" variant="outline">Warning</UBadge>
              <UBadge color="error" variant="soft">Error</UBadge>
            </div>

            <UAvatar
              src="https://avatars.githubusercontent.com/u/739984?v=4"
              alt="Avatar"
              size="lg"
            />
          </div>
        </UCard>
      </div>

      <section class="mb-16">
        <h3
          class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Tailwind CSS Utilities in Action
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            class="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 rounded-xl text-white transform hover:scale-105 transition-transform duration-300"
          >
            <h4 class="text-xl font-bold mb-2">Gradients</h4>
            <p class="opacity-90">Beautiful gradient backgrounds</p>
          </div>

          <div
            class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Shadows
            </h4>
            <p class="text-gray-600 dark:text-gray-300">
              Elegant shadow effects
            </p>
          </div>

          <div
            class="bg-primary-500 p-6 rounded-xl text-white transform hover:rotate-1 transition-transform duration-300"
          >
            <h4 class="text-xl font-bold mb-2">Transforms</h4>
            <p class="opacity-90">Smooth animations and transforms</p>
          </div>
        </div>
      </section>

      <footer
        class="text-center py-8 border-t border-gray-200 dark:border-gray-700"
      >
        <p class="text-gray-600 dark:text-gray-300">
          Built using Nuxt 4, Nuxt UI 3, and Tailwind 4
        </p>
        <div class="flex justify-center gap-4 mt-4">
          <UBadge variant="subtle" color="success">Nuxt 4</UBadge>
          <UBadge variant="subtle" color="secondary">Nuxt UI 3</UBadge>
          <UBadge variant="subtle" color="info">Tailwind 4</UBadge>
        </div>
      </footer>
    </main>
  </div>
</template>
