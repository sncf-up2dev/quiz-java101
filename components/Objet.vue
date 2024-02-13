<template>
    <section>
      <question title="Objet" />
      <snippet><pre>
public class MyClass {
    public static void main(String args[]) {
      Object o;

      if (o instanceof Object) {
          System.out.println("It is a thing.");
      } else {
          System.out.println("It is nothing.");
      }
    }
}</pre></snippet>
      <snippet><pre>
public class MyClass {
    public static void main(String args[]) {
      Object o = null;

      if (o instanceof Object) {
          System.out.println("It is a thing.");
      } else {
          System.out.println("It is nothing.");
      }
    }
}</pre></snippet>
      <snippet><pre>
public class MyClass {
    static Object o;

    public static void main(String args[]) {
      if (o instanceof Object) {
          System.out.println("It is a thing.");
      } else {
          System.out.println("It is nothing.");
      }
    }
}</pre></snippet>
      <snippet><pre>
public class MyClass {
    static Object o;

    public static void main(String args[]) {
      Object o;

      if (o instanceof Object) {
          System.out.println("It is a thing.");
      } else {
          System.out.println("It is nothing.");
      }
    }
}</pre></snippet>
    <Summary>
        <p>Les exercices de ce chapitre démontrent, entre autres, les aspects suivants.</p>
        <ul>
            <li>Le fonctionnement d'opérateur <code>instaceof</code> lorsque l'opérande est d'une valeur nulle.</li>
            <li>La différence entre les variables locales et les champs en terme d'initialisation.</li>
            <li>La porté des variables locales.</li>
        </ul>
    </Summary>
  </section>
</template>
<script setup lang="ts">
import Snippet from "~/components/Snippet.vue";
import Question from "~/components/Question.vue";
</script>