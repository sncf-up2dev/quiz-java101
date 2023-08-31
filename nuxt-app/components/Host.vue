<template>
    <main>
        <h1>Quiz Rentrée - Java</h1>
        <header>
            <NuxtLink :href="props.prev">Précédent</NuxtLink>
            <NuxtLink v-if="!props.hideHome" href="/">Contenu</NuxtLink>
            <NuxtLink :href="props.next">Suivant</NuxtLink>
        </header>
        <slot></slot>
        <footer>
          <NuxtLink :href="props.prev">Précédent</NuxtLink>
          <NuxtLink v-if="!props.hideHome" href="/">Contenu</NuxtLink>
          <NuxtLink :href="props.next">Suivant</NuxtLink>
        </footer>
    </main>
</template>
<script setup lang="ts">

interface Props {
  next?: string;
  prev?: string;
  hideHome?: boolean;
}

const props = defineProps<Props>();

</script>