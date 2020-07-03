<template>
  <div class="footer">
    <a-row type="flex" justify="space-between">
      <a-col class="footer-info" :lg="{span:16}" :md="{span:24}">
        <div>
          <p>Công ty trách nghiệm hữu hạn Lussom Co.Ltd.</p>
          <p>
            Địa chỉ: Tầng 4, Tòa nhà Eurowindow, Phố Trần Duy Hưng, Phường Trung
            Hòa, Quận Cầu Giấy, TP Hà Nội.
          </p>
          <p>Email: lussom.co@gmail.com</p>
          <p>Điện thoại: 02438453888.</p>
          <p>Chịu trách nghiệm nội dung: Shin Dongseok.</p>
          <p>Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng sô 69/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 26/02/2020.</p>
        </div>
        <div class="logo">
          <img :src="importImgHeader('logoLussom.png')" />
          <p style="margin: 0;">Copyright ©2020 Lussom. All Rights Reserved.</p>
        </div>
      </a-col>
      <a-col class="footer-menu" :lg="{span:8}">
        <ul class="navigation-items">
          <li routerLink="/home" routerLinkActive="isNav-active">
            <a>TRANG CHỦ</a>
          </li>
          <li routerLink="/news" routerLinkActive="isNav-active">
            <a>TIN TỨC</a>
          </li>
          <li routerLink="/careers" routerLinkActive="isNav-active">
            <a>TUYỂN DỤNG</a>
          </li>
          <li routerLink="/contact" routerLinkActive="isNav-active">
            <a>LIÊN HỆ</a>
          </li>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { imgHeader } from "../ultils/importImg";
export default {
  name: "footer",
  methods: {
    importImgHeader(img) {
      return imgHeader[img];
    }
  }
};
</script>

<style lang='scss' scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,600;0,700;1,200;1,400;1,700&display=swap"); */
$desktop: "(max-width: 1440px)";
a {
  text-decoration: none;
  color: lightgray;
  font-family: "Source Sans Pro", sans-serif;
}
a:hover,
a:active {
  color: lightgray;
}
a:focus,
li:focus {
  outline: none;
}
li {
  cursor: pointer;
}
.isNav-active {
  background: #29a5ea00;
  display: flex;
  align-items: center;
  outline: none;
}
.isNav-active > a {
  color: white;
}
.navigation-items {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 3rem;
}
.navigation-items > li {
  padding: 0 0.5rem;
}
.footer {
  background: #1a80b6;
  div {
    z-index: 2;
    max-width: 1440px;
    background: #1a80b6;
    margin: 0 auto;
    font-weight: bold;
    height: 100%;
    align-items: baseline;
    @media #{$desktop} {
      max-width: 90%;
    }
  }
  div:first-child {
    text-align: start;
  }
}
.footer-info > div:first-of-type {
  font-size: 1rem;
  color: white;
  font-weight: 400;
  padding: 1.5rem 0 0 0;
}
.footer-menu {
  display: flex;
  justify-content: flex-end;
}
.logo {
  display: flex;
  p {
    font-size: 1rem;
    font-weight: 400;
    color: white;
    margin-left: 1rem !important;
  }
}
.coppyright {
  font-size: 1rem;
  font-weight: lighter;
  color: white;
  padding-left: 2rem;
}
@media only screen and (max-width: 1440px) {
  mat-toolbar {
    width: 90%;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1024px) {
  .footer-menu {
    display: none !important;
  }
  .footer-info {
    max-width: 100% !important;
  }
  .footer-info > div:first-of-type > p {
    white-space: pre-line;
  }
}
@media only screen and (max-width: 768px) {
  .logo > p {
    font-size: 0.6rem;
  }
  .footer-info > div:first-of-type > p {
    font-size: 0.8rem;
    line-height: 18px;
  }
}
@media only screen and (max-width: 600px) and (min-width: 321px) {
  .coppyright {
    font-size: 0.7rem;
    max-width: 100% !important;
    padding-left: 1rem;
  }
  .logo {
    // max-width: 25% !important;
    img{
      width: 25%;
    }
  }
  mat-toolbar {
    padding: 0 !important;
  }
}
@media only screen and (min-width: 601px) {
  // .logo {
  //   max-width: 15% !important;
  // }
  .footer-menu {
    /* margin-right: 2rem; */
  }
}
@media only screen and (max-width: 320px) {
  .logo {
    max-width: 18% !important;
  }
  .coppyright {
    max-width: 100%;
    font-size: 0.7rem;
    padding-left: 0.5rem;
  }
  mat-toolbar {
    padding: 0 !important;
  }
}
</style>