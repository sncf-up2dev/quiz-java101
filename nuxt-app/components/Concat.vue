<template>
    <section>
      <question title="Concaténation" />
      <snippet><pre>
public class MyClass {
  public static void main(String args[]) {
    Object o = new Object();
    Integer i = 13;
    String s = "Hello";

    System.out.println(o + i + s);
  }
}</pre></snippet>
      <snippet><pre>
public class MyClass {
  public static void main(String args[]) {
    Object o = new Object();
    Integer i = 13;
    String s = "Hello";

    System.out.println(o + (i + s));
  }
}</pre></snippet>
      <snippet><pre>
public class MyClass {
  public static void main(String args[]) {
    System.out.println(4 + 2 + " is a bad answer.");
    System.out.println(4 + (2 + " is a good answer."));
  }
}</pre></snippet>
        <Summary>
            <p>Les exercices de ce chapitre portent sur la précédence des opérateurs, ils démontrent, entre autres, les aspects suivants.</p>
            <ul>
                <li>L'ordre de réalisation des opérateurs.</li>
                <li>La possibilité de changer cette ordre en regroupant les opérateur entre parenthèses.</li>
                <li>L'opérateur de concaténation de chaînes caractères.</li>
            </ul>
        </Summary>
    </section>
</template>
<script setup lang="ts">
import Question from "~/components/Question.vue";
import Snippet from "~/components/Snippet.vue";
</script>