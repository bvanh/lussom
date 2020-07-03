<template>
  <div class="home">
    <Index />
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "@/components/news/Index.vue";

export default {
  name: "Home",
  components: {
    Index
  }
};
</script>
