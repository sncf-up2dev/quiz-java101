<template>
    <section>
      <question title="Increment" />
      <snippet><pre>
public class MyClass {
    public static void main(String args[]) {
      short x = 0;
      x = x + 1;

      System.out.println("Value of x %d".formatted(x));
    }
}</pre></snippet>
      <snippet><pre>
public class MyClass {
    public static void main(String args[]) {
      short x = 0;
      x++;

      System.out.println("Value of x %d".formatted(x));
    }
}</pre></snippet>
      <snippet><pre>
public class MyClass {
    public static void main(String args[]) {
      short x = 0;

      System.out.println("Value of x++ %d".formatted(x++));
      System.out.println("Value of ++x %d".formatted(++x));
    }
}</pre></snippet>
        <Summary>
            <p>Les exercices de ce chapitre portent sur les types primitifs ainis que certains opérateurs arithmétiques.</p>
            <p>Ils démontrent, entre autres, les aspects suivants.</p>
            <ul>
                <li>La promotion des types des opérandes lors d'une expression arithmétique.</li>
                <li>La différence entre les opérateurs préfixe et suffixe.</li>
            </ul>
        </Summary>
    </section>
</template>
<script setup lang="ts">
import Question from "~/components/Question.vue";
import Snippet from "~/components/Snippet.vue";
</script>