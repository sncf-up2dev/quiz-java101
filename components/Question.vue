<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <h2>{{ props.title }}</h2>
  <p>Quels seront les résultats de l'exécution du chaque des codes suivants, et pour quelles raisons&nbsp;?</p>
  <ul>
    <li>Erreur de compilation.</li>
    <li>Erreur d'exécution.</li>
    <li>Succès.</li>
  </ul>
  <p>Dans le cas de succès, quel sera l'affichage sur la sortie standard&nbsp;?</p>
</template>

<style scoped>

</style>