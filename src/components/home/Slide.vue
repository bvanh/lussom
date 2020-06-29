<template>
  <!-- <a-carousel dotsClass="dots-control" :after-change="onChange" autoplay>
    <a slot="customPaging" slot-scope="props">
      <img :src="getImgUrl(props.i)" />
    </a>
    <div v-for="item in carouselItems" :key="item.id">
      <div
        class="slider-container"
        :style="{
          backgroundImage: getBackgroundUrl(item.img),
        }"
      >
        <div>
          <div>
            <div>
              <h3 class="slide-title">{{ item.title }}</h3>
              <span class="slide-content">{{ item.content }}</span>
              <span class="slide-content-mobile">{{ item.contentMobile }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-carousel>-->
  <swiper class="swiper" :options="swiperOptions">
    <swiper-slide v-for="item in carouselItems" :key="item.id">
      <div
        class="slider-container"
        :style="{
          backgroundImage: getBackgroundUrl(item.img),
        }"
      >
        <div>
          <div>
            <div>
              <h3 class="slide-title">{{ item.title }}</h3>
              <span class="slide-content">{{ item.content }}</span>
              <span class="slide-content-mobile">{{ item.contentMobile }}</span>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Home",
  data() {
    return {
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      carouselItems: [
        {
          img: "slide1.png",
          title: "Tầm nhìn",
          content: `Thị trường game Việt Nam là một thị trường lớn với quy mô 215 triệu đô la, xếp số 1 Đông Nam Á và số 8 Thế Giới về lượt tải về. Nhờ vào cơ sở hạ tầng và kiến thức chuyên môn về ngành đã tích lũy được trong thời gian qua tại Việt Nam, chúng tôi tiến vào thị trường hứa hẹn này với mục tiêu kết nối, giới thiệu đến người dùng Việt Nam những sản phẩm game chất lượng cao từ khắp nơi trên thế giới.`,
          contentMobile: `Nhờ vào cơ sở hạ tầng và kiến thức chuyên môn về ngành đã tích lũy được trong thời gian qua tại Việt Nam, chúng tôi tiến vào thị trường hứa hẹn này với mục tiêu kết nối, giới thiệu đến người dùng Việt Nam những sản phẩm game chất lượng cao từ khắp nơi trên thế giới.`
        },
        {
          img: "slide2.png",
          title: "Tổ chức",
          content: `Sở hữu nhân sự người Việt xuất thân từ các công ty game lớn tại Việt Nam có đầy đủ kinh nghiệm về phát hành game toàn cầu giúp giải quyết các khó khăn trong các lĩnh vực bản địa hóa sản phẩm game, phát hành game, tối ưu hóa doanh thu... đồng thời sở hữu mạng lưới các kênh marketing đa dạng giúp quảng bá hình ảnh sản phẩm hiệu quả nhất.`,
          contentMobile: `Sở hữu nhân sự người Việt xuất thân từ các công ty game lớn tại Việt Nam có đầy đủ kinh nghiệm về phát hành game toàn cầu giúp giải quyết các khó khăn trong các lĩnh vực bản địa hóa sản phẩm game, phát hành game, tối ưu hóa doanh thu...`
        },
        {
          img: "slide3.png",
          title: "Định hướng",
          content: `Cung cấp không chỉ các sản phẩm game chất lượng mà còn đầu tư cho các chức năng thiết yếu cho công việc phát hành, vận hành, quảng bá dịch vụ game tại Việt Nam như xác nhận và quản lý thành viên, hệ thống thanh toán nội địa đa dạng, các loại hệ thống vận hành, phân tích thống kê… nhằm tạo nên một hệ sinh thái đa dạng, khỏe mạnh trong tương lai.`,
          contentMobile: `Cung cấp không chỉ các sản phẩm game chất lượng mà còn đầu tư cho các chức năng thiết yếu cho công việc phát hành, vận hành, quảng bá dịch vụ game tại Việt Nam như xác nhận và quản lý thành viên, hệ thống thanh toán nội địa đa dạng, các loại hệ thống vận hành, phân tích thống kê…`
        }
      ],
      indexSlide: 0
    };
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.$swiper;
    // }
  },
  methods: {
    onChange(a) {
      this.indexSlide = a;
    },
    getBackgroundUrl(pic) {
      return `url(${require("../../assets/header/" + pic)})`;
    },
    getImgUrl(pic) {
      let isActive = pic === this.indexSlide;
      switch (isActive) {
        case true:
          return require("../../assets/header/slide-active-dots.png");
        default:
          return require("../../assets/header/slide-dots.png");
      }
    }
  },
  mounted() {
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(1, 1000, false);
  },
  components: {
    Swiper,
    SwiperSlide
    // directive
  }
};
</script>

<style scoped lang="scss">
$desktop1: 1600px;
$desktop2: 1280px;
$desktop3: 768px;
$mobile: 414px;
$minDesktop1: "(min-width:1600px)";
$inDesktop2: "(min-width: 1280px) and (max-width: 1599px)";
$inDesktop3: "(max-width: 1024px) and (min-width: 769px)";
$inDesktop: "(min-width: 769px)";
@mixin tablet {
  @media (max-width: #{$desktop3}) {
    @content;
  }
}
@mixin minDesktop {
  @media (max-width: #{$menuMobie-width}) {
    @content;
  }
}
@mixin mobile {
  @media (max-width: #{$mobile}) {
    @content;
  }
}
.slider-container {
  min-height: 100vh;
  background-size: cover !important;
  background-position: center;
  display: flex;
  align-items: center;
  @media #{$inDesktop} {
    div {
      width: 90%;
    }
  }
  @media #{$minDesktop1} {
    min-height: 55rem;
    div {
      max-width: 1440px !important;
      //   margin: 0 auto;
    }
  }
  @media #{$inDesktop2} {
    min-height: 40rem;
  }
  @media #{$inDesktop3} {
    min-height: 90vh;
  }
  @include tablet() {
    min-height: 40rem;
    div {
      background: #0801016b;
      width: 100%;
    }
    div > div {
      width: 90%;
      margin: 0 auto;
    }
    div > div > div {
      width: 100%;
    }
  }
  @include mobile() {
    div > div {
      max-width: 95%;
      margin: 0 auto;
    }
    .slide-content-mobile {
      font-size: 0.85rem !important;
    }
    div > div > div {
      width: 100%;
    }
    .slide-title {
      font-size: 2rem;
      line-height: 2rem;
      margin-bottom: 0.5rem !important;
    }
  }
}
.slider-container > div {
  background: #08010100;
  height: 100%;
  display: flex;
  align-items: center;
}
.slider-container > div {
  margin: 0 auto;
}
.slider-container > div > div > div {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.slide-title {
  font-size: 5rem;
  text-align: left;
  width: 100%;
  line-height: 4rem;
  font-family: "Source Sans Pro", sans-serif !important;
  font-style: italic;
  font-weight: 900;
  color: white;
  margin-bottom: 1.5rem;
}
.slide-content,
.slide-content-mobile {
  color: white;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: justify;
}

// .myPoint {
//   max-width: 90%;
//   margin: 0 auto;
//   padding: 0;
// }
// .myPoint li {
//   background-image: url(../../../assets/dots.png);
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   margin-right: 8px;
//   /*
//   border-radius: 50%;
//   border: 2px solid rgba(0, 0, 0, 0.55);
//   padding: 4px;
//   margin: 0 3px;
//   transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);
//   transition: 0.4s; */
// }
// .myPoint li.active {
//   background-image: url(../../../assets/dots-active.png);
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   width: 35px;
//   /* transform: scale(1.2); */
// }
// .rectangle {
//   position: absolute;
//   bottom: 0;
// }
// @media screen and (max-width: 1440px) and (min-width: 767px) {
//   .slide-content {
//     font-size: 1rem;
//   }
// }
// @media screen and (min-width: 769px) {
//   .slider-container > div {
//     width: 90%;
//   }
// }
// @media screen and (max-width: 768px) {
//   .slider-container > div {
//     background: #0801016b;
//     width: 100%;
//   }
//   .slider-container > div > div {
//     width: 90%;
//     margin: 0 auto;
//   }
//   .slider-container > div > div > div {
//     width: 100%;
//   }
// }
// @media (max-width: 1096px) and (min-width: 877px) {
//   .slide-title {
//     width: 100%;
//   }
// }
// @media (min-width: 1097px) and (max-width: 1600px) {
//   /* .slide-title {
//     width: 65%;
//   } */
//   .dots-control {
//     bottom: 25%;
//   }
// }
// @media screen and (max-width: 1024px) and (min-width: 769px) {
//   .slider-container {
//     min-height: 90vh;
//   }
// }
// @media screen and (max-width: 768px) {
//   .slider-container {
//     min-height: 60vh;
//   }
// }
// @media screen and (max-width: 414px) {
//
//   .dots-control {
//     bottom: 20px;
//   }
//   .myPoint {
//     position: absolute;
//     right: 5%;
//     bottom: 0;
//   }
//   .myPoint li {
//     width: 10px;
//     height: 10px;
//   }
// }
// @media (min-width: 415px) and (max-width: 768px) {
//   .slide-content {
//     font-size: 1rem;
//   }
//   .slide-title {
//     font-size: 3rem;
//     line-height: 3rem;
//     width: 95%;
//   }
//   .dots-control {
//     width: 100%;
//     bottom: 15%;
//   }
//   .myPoint {
//     width: 90%;
//     margin: 0 auto;
//   }
//   .myPoint li {
//     width: 12px;
//     height: 12px;
//   }
//   .slide-title {
//     font-size: 3rem;
//     width: 95%;
//     line-height: 3rem;
//   }
// }
// @media (min-width: 768px) and (max-width: 1024px) {
//   .dots-control {
//     bottom: 18%;
//   }
//   .myPoint li {
//     width: 12px;
//     height: 12px;
//   }
// }
// @media (min-width: 1025px) and (max-width: 1300px) {
//   .dots-control {
//     bottom: 22%;
//   }
//   .myPoint li {
//     width: 12px;
//     height: 12px;
//   }
//   .myPoint li.active {
//     width: 30px;
//   }
// }
// @media (min-width: 1440px) {
//   .slide-content {
//     width: 80%;
//   }
// }
// @media (max-width: 414px) {
//   .slide-content {
//     display: none;
//   }
//   .slide-content-mobile {
//     display: block;
//   }
// }
// @media (min-width: 415px) {
//   .slide-content {
//     display: block;
//   }
//   .slide-content-mobile {
//     display: none;
//   }
// }
</style>
