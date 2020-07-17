<template>
  <div class="slide-wraper">
    <swiper :options="swiperOptions">
      <swiper-slide
        class="slide"
        v-for="item in carouselItems"
        :key="item.id"
        :style="{
        backgroundImage: getBackgroundUrl(item.img),
      }"
      >
        <a-row class="slide-container">
          <a-col :lg="{span:12}" :xl="{span:9}" :span="24" align="center">
            <h3 class="slide-title">{{ item.title }}</h3>
            <span class="slide-content">{{ item.content }}</span>
            <span class="slide-content-mobile">{{ item.contentMobile }}</span>
          </a-col>
          <a-col :span="12" :xl="{span:15}"></a-col>
        </a-row>
      </swiper-slide>
      <div class="swiper-pagination-h" slot="pagination">
        <div class="swiper-pagination"></div>
      </div>
    </swiper>
    <img src="../../assets/header/Rectangle.png" width="100%" class="rectangle" />
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Home",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '"></span>';
          }
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
  //  directives: {
  //   swiper: directive
  // },
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

<style src='./style/Slide.scss' lang='scss'>

</style>
