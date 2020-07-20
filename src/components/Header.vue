<template>
  <div class="menu-bar">
    <Reveal :closeOnNavigation="true">
      <router-link to="/">
        <span>TRANG<span style="visibility:hidden">i</span>CHỦ </span>
      </router-link>
      <router-link to="/news">
        <span>TIN<span style="visibility:hidden">i</span>TỨC
        </span>
      </router-link>
      <router-link to="/careers">
        <span>TUYỂN<span style="visibility:hidden">i</span>DỤNG
        </span>
      </router-link>
      <router-link to="/contact">
        <span>LIÊN<span style="visibility:hidden">i</span>HỆ
        </span>
      </router-link>
    </Reveal>
    <!-- <router-link to="/" class="logo">
      <img
        :src="importImgHeader('logoLussom.png')"
        width="75%"
        style="cursor: pointer;outline: none;"
      />
    </router-link>-->
    <a-row type="flex" justify="center" class="menu">
      <a-col>
        <router-link to="/" class="logo">
          <img
            :src="importImgHeader('logoLussom.png')"
            width="75%"
            style="cursor: pointer;outline: none;"
          />
        </router-link>
      </a-col>
      <a-col>
        <ul class="navigation-items">
          <li>
            <router-link style="outline: none;" to="/">
              TRANG CHỦ
            </router-link>
          </li>
          <li>
            <router-link style="outline: none;" to="/news">
              TIN TỨC
            </router-link>
          </li>
          <li>
            <router-link style="outline: none;" to="/careers">
              TUYỂN DỤNG
            </router-link>
          </li>
          <li>
            <router-link style="outline: none;" to="/contact">
              LIÊN HỆ
            </router-link>
          </li>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { Reveal } from "vue-burger-menu";
import { imgHeader } from "../ultils/importImg";
export default {
  name: "Header",
  components: {
    Reveal,
  },
  methods: {
    importImgHeader(img) {
      return imgHeader[img];
    },
  },
};
</script>

<style lang="scss" scoped>
$menuMobie-width: 959px;
@mixin tablet {
  @media (max-width: #{$menuMobie-width}) {
    @content;
  }
}
.bm-menu {
  background-color: black !important;
}
.menu-bar {
  position: absolute;
  top: 0;
  z-index: 2;
  background: rgba(63, 146, 191, 0.72);
  font-weight: bold;
  // display: flex;
  // justify-content: space-between;
  padding: 0 !important;
  width: 100%;
  @include tablet {
    height: 3rem;
  }
}
a .btn-active-bottom {
  display: none;
}
a.router-link-exact-active {
  color: #fafafa;
  position: relative;
  .btn-active-bottom {
    display: block;
    position: absolute;
    bottom: 0;
    left: 34%;
  }
  // background-image: url('../assets/header/bottom_menu.png');
}
/* @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,600;0,700;1,200;1,400;1,700&display=swap"); */
a {
  text-decoration: none;
  color: #99dcff;
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
  position: relative;
  text-align: left;
  @include tablet() {
    top: 0.4rem;
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
  z-index: -1;
}
@media (min-width: 1600px) {
  .menu {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }
}
@media (max-width: 960px) {
  .menu {
    justify-content: flex-end !important;
    div:nth-child(2) {
      display: none !important;
    }
  }
}
</style>
