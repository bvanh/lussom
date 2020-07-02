<template>
  <div class="menu-bar">
    <Slide>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </Slide>
    <router-link to="/" class="logo">
      <img
        :src="importImgHeader('logoLussom.png')"
        width="75%"
        style="cursor: pointer;outline: none;"
      />
    </router-link>
    <a-row type="flex" justify="center" class="menu">
      <ul class="navigation-items">
        <li>
          <router-link style="outline: none;" to="/">TRANG CHỦ</router-link>
        </li>
        <li>
          <router-link style="outline: none;" to="/news">TIN TỨC</router-link>
        </li>
        <li>
          <router-link style="outline: none;" to="/careers">TUYỂN DỤNG</router-link>
        </li>
        <li>
          <router-link style="outline: none;" to="/about">LIÊN HỆ</router-link>
        </li>
      </ul>
    </a-row>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
import { imgHeader } from "../ultils/importImg";
export default {
  name: "Header",
  components: {
    Slide
  },
  methods: {
    importImgHeader(img) {
      return imgHeader[img];
    }
  }
};
</script>

<style scoped lang="scss">
$menuMobie-width: 959px;
@mixin tablet {
  @media (max-width: #{$menuMobie-width}) {
    @content;
  }
}
.menu-bar {
  position: absolute;
  top: 0;
  z-index: 2;
  background: rgba(35, 111, 152, 0.76);
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 0 !important;
  width: 100%;
  @include tablet {
    height: 3rem;
  }
}
a.router-link-exact-active {
  color: #fafafa;
}
/* @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,600;0,700;1,200;1,400;1,700&display=swap"); */
a {
  text-decoration: none;
  color: lightgray;
  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 0.1rem;
  font-size: 20px;
}
a:hover,
a:active {
  color: white;
}
.navigation-items {
  list-style-type: none;
  display: flex;
  padding: 1rem;
  margin: 0;
}
.navigation-items > li {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
}
.navigation-items > li:focus {
  outline: none;
}
.logo {
  position: absolute;
  top: 1.4rem;
  left: 5%;
  text-align: left;
  @include tablet() {
    top: 0.4rem;
    right: 5%;
  }
}
@media (max-width: 599px) {
  .mat-toolbar-row,
  .mat-toolbar-single-row {
    height: 42px;
  }
}
.isNav-active {
  background: #29a5ea00;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #f9f9f9;
  outline: none;
}
.isNav-active > a {
  color: white;
}
.menu {
  max-width: 88%;
  margin: 0 auto;
  position: relative;
  align-items: center !important;
  justify-content: space-between !important;
}
@media (min-width: 1600px) {
  .menu {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }
}
@media (max-width: 960px) {
  .logo {
    position: relative;
    left: 0;
  }
  .menu {
    display: none !important;
  }
  //   mat-icon {
  //     margin-left: 1rem;
  //   }
}
</style>
