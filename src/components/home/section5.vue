<template>
  <div fxFlexAlign="center" fxLayout="column" class="section4">
    <div
      fxFlexAlign="center"
      fxLayout="column"
      style="text-align: center; padding: 0rem 10% 3rem 10%;"
      fxFlex="40"
      class="section4-title-container"
    >
      <span class="section-title">
        Tuyển dụng
        <span style="color: #1499df;">Lussom</span>
      </span>
      <div class="section-title-content">
        Chúng tôi luôn chào đón các ứng viên có hoài bão, mong muốn được làm
        việc trong môi trường quốc tế chuyên nghiệp, năng động và sáng tạo. Nếu
        bạn có khát vọng đổi thay, đừng ngần ngại tham gia cùng chúng tôi để
        chinh phục những đỉnh cao mới.
      </div>
    </div>
    <swiper :options="swiperOptions" class="carousel-jobs">
      <swiper-slide v-for="slide in newsJobs" :key="slide.id">
        <div class="slide-jobs">
          <h3 style="font-weight: 600;">{{ slide.name }}</h3>
          <span
            v-if="checkTimestamp(slide.expried)"
            class="stick-new"
            style="margin: 0.5rem 0 0 0;"
          >new</span>
          <span
            v-if="checkTimestampExpried(slide.expried)"
            style="margin: 0.5rem 0 0 0;"
            class="stick-expried"
          >Hết hạn</span>
          <p style="margin-top:6px">Vị trí trống: {{ slide.vacancies }}</p>
          <p>Kinh nghiệm: {{ slide.experience }}</p>
          <p>Bộ phận: {{ slide.categories }}</p>
          <!-- <p>Ngày hết hạn: {{ slide.expried | date: "dd-MM-yyyy" }}</p> -->
          <router-link :to="`/careers/detail/${ slide.id }`">
            <a-button mat-button class="btn-read-more-job">Read more >></a-button>
          </router-link>
        </div>
      </swiper-slide>
      <div class="swiper-pagination2" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { getDataJobs } from "../../api/http-common";
import "swiper/css/swiper.css";
export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 4,
        spaceBetween: 10,
        freeMode: false,

        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            margin: 10
          },
          576: {
            slidesPerView: 3,
            margin: 10
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4
          },
          1280: {
            slidesPerView: 4
          }
        },
        pagination: {
          el: ".swiper-pagination2",
          clickable: true,
          type: "fraction"
          // renderBullet: function(index, className) {
          //   return '<span class="' + className + '"><span>' + index + "</span></span>";
          // }
        }
      },
      params: {
        _limit: 10,
        _start: 0
      },
      newsJobs: []
    };
  },
  methods: {
    checkTimestamp(strDate) {
      let today = new Date().getTime();
      let dateApply = new Date(strDate).getTime();
      let expried = today - dateApply;
      if (expried < 0) {
        return true;
      } else {
        return false;
      }
    },
    checkTimestampExpried(strDate) {
      let today = new Date().getTime();
      let dateApply = new Date(strDate).getTime();
      let expried = today - dateApply;
      if (expried > 0) {
        return true;
      } else {
        return false;
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created() {
    const params = this.params;
    getDataJobs(this, "/recruitments", params);
  }
};
</script>

<style  lang='scss' scoped>
@import "./style/section5.scss";
</style>
