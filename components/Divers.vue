<template>
    <section>
        <question title="Divers" />
          <snippet><pre>
public class MyClass {
  public static void main(String args[]) {

    System.out.println(052);
  }
}</pre></snippet>
          <snippet><pre>
public class MyClass {
  public static void main(String args[]) {

    System.out.println(~13 + 1);
  }
}</pre></snippet>
        <Summary>
            <p>Les exercices de ce chapitre démontrent les aspects suivants.</p>
            <ul>
                <li>La représentation octale des entiers.</li>
                <li>L'opérateur de complément binaire.</li>
            </ul>
        </Summary>
    </section>
</template>
<script setup lang="ts">
import Question from "~/components/Question.vue";
import Snippet from "~/components/Snippet.vue";
</script>