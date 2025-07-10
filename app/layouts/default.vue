<script lang="ts" setup></script>
<template>
  <div>
    <header class="border-default border-b backdrop-blur-md">
      <a
        class="flex items-center space-x-3 text-lg font-semibold"
        href="/"
      >
        <img
          src="/favicon.ico"
          alt="logo"
          class="size-5"
        />
        Vector Database Party</a
      >
    </header>

    <div class="border-default flex border-b">
      <aside
        class="no-scroll border-default sticky top-0 hidden max-h-screen w-[300px] flex-shrink-0 overflow-y-auto border-r pr-8 lg:block"
      >
        <nav class="w-full py-2 pb-20 pl-4 text-base">Menu</nav>
      </aside>

      <div class="w-10 grow pb-8">
        <div
          class="border-default sticky top-0 z-20 flex w-full overflow-x-auto border-b px-6 py-2 whitespace-nowrap backdrop-blur lg:px-20"
        >
          <VectorDbLabel
            v-for="db in vectorDatabases"
            :key="db.id"
            :db="db"
          />
        </div>
        <main class="relative pt-6">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<style></style>
