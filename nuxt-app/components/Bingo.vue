<template>
    <section>
        <question title="Bingo" />
        <snippet><pre>
public class MyClass {
  public static void main(String args[]) {
  Boolean b = null;

  System.out.println(b ? "Bingo" : "Oups");
  }
}</pre></snippet>
        <snippet><pre>
public class MyClass {
  public static void main(String args[]) {
    Boolean b = false;

    System.out.println(b ? "Bingo" : "Oups");
  }
}</pre></snippet>
        <snippet><pre>
public class MyClass {
  public static void main(String args[]) {
    Boolean b = null;

    System.out.println(Boolean.TRUE.equals(b) ? "Bingo" : "Oups");
  }
}</pre></snippet>
        <Summary>
            <p>Les exercices de ce chapitre portent sur les types d'emballage, notamment la classe <code>Boolean</code>.</p>
            <p>Ils démontrent, entre autres, les aspects suivants.</p>
            <ul>
                <li>Le mécanisme de déballage (<i>unboxing</i>), notamment lors d'une valeur nulle.</li>
                <li>L'utilisation d'égalité de valeur pour détourner les valeurs nulles.</li>
            </ul>
        </Summary>
    </section>
</template>
<script setup lang="ts">
import Question from "~/components/Question.vue";
import Snippet from "~/components/Snippet.vue";
</script>