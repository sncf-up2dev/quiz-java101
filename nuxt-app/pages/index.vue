<template>
    <Host next="/increment" hide-home>
      <section>
        <h2>Contenu</h2>
        <ol>
          <li><NuxtLink href="/increment">Increment</NuxtLink></li>
          <li><NuxtLink href="/objet">Objet</NuxtLink></li>
          <li><NuxtLink href="/bingo">Bingo</NuxtLink></li>
          <li><NuxtLink href="/concat">Concaténation</NuxtLink></li>
          <li><NuxtLink href="/divers">Divers</NuxtLink></li>
        </ol>
      </section>
    </Host>
</template>