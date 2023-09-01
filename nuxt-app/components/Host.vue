<template>
    <main>
        <h1>Quiz Rentrée - Java</h1>
        <header>
            <MenuBar :next="props.next" :prev="props.prev" :hide-home="props.hideHome"></MenuBar>
        </header>
        <slot></slot>
        <footer>
            <MenuBar :next="props.next" :prev="props.prev" :hide-home="props.hideHome"></MenuBar>
        </footer>
    </main>
</template>
<script setup lang="ts">

import MenuBar from "~/components/MenuBar.vue";

interface Props {
  next?: string;
  prev?: string;
  hideHome?: boolean;
}

const props = defineProps<Props>();

</script>