<template>
    <menu>
        <NuxtLink :href="props.prev">Précédent</NuxtLink>
        <NuxtLink v-if="!props.hideHome" href="/">Contenu</NuxtLink>
        <NuxtLink :href="props.next">Suivant</NuxtLink>
    </menu>
</template>

<script setup lang="ts">
interface Props {
  next?: string;
  prev?: string;
  hideHome?: boolean;
}

const props = defineProps<Props>();

</script>
