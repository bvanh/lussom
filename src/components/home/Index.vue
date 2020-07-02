<template>
  <div>
    <slide />
    <section2 />
    <section3 />
    <section4 />
    <section5/>
  </div>
</template>

<script>
import Slide from "./Slide";
import section2 from "./section2";
import section3 from "./section3";
import section4 from "./section4";
import section5 from './section5'
export default {
  name: "Index",
  components: {
    Slide,
    section2,
    section3,
    section4,
    section5
  }
};
</script>

<style>
</style>