<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style lang='scss'>
$mediaDesktop1: "(min-width: 1097px) and (max-width: 1600px)";
$mediaDesktop2: "(min-width:1601px)";
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
.dots-control {
  bottom: 30% !important;
  max-width: 90%;
  text-align: left !important;
  left: 5% !important;
  @media #{$mediaDesktop1} {
    bottom: 25% !important;
  }
  @media #{$mediaDesktop2}{
    max-width: 1440px !important;
    // position:  relative !important;
  }
  // @media (min-width: 1097px) and (max-width: 1600px) {
  //   /* .slide-title {
  //     width: 65%;
  //   } */
  //   .dots-control {
  //     bottom: 25%;
  //   }
  // }
}
</style>
