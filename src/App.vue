<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang='scss'>
// @media (min-width: 1097px) and (max-width: 1600px) {
//   /* .slide-title {
//     width: 65%;
//   } */
//   .dots-control {
//     bottom: 25%;
//   }
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #fafafa;
}
/* css button menu */
.cross-style {
  right: 15px;
  top: 15px;
}
.bm-burger-button {
  height: 20px;
  left: 36px;
  top: 14px;
  width: 24px;
}
.bm-burger-bars {
  background-color: #ffffff;
}
@media screen and (min-width: 959px) {
  .bm-burger-button {
    display: none;
  }
}
</style>
