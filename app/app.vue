<template>
  <div>
    <NuxtPage
      :transition="{
        mode: 'out-in',
        enterActiveClass: 'transition-all duration-300',
        leaveActiveClass: 'transition-all duration-300',
        enterFromClass: 'opacity-0 translate-y-2 scale-[0.98] blur',
        leaveToClass: 'opacity-0 translate-y-2 scale-[0.98] blur',
      }"
    />
  </div>
</template>
