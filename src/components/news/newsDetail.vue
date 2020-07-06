<template>
  <div>
    <div class="news-header">
      <div>
        <h2>NEWS</h2>
        <p>
          Thông tin mới nhất về các sản phẩm của Lussom, cũng như các hoạt động
          của công ty.
        </p>
      </div>
    </div>
    <a-row class="detail-container">
      <div class="news-detail-title">
        <h2>{{ newsDetail.title }}</h2>
        <span>{{ convertDate(newsDetail.created_at) }}</span>
        <div
          class="news-detail-thumbnail"
          :style="{
            backgroundImage: getBackgroundElement(
              api.API_ROOT,
              newsDetail.banner.url
            ),
          }"
        ></div>
      </div>
      <a-col :md="16" align="left">
        <vue-markdown style="margin-top: 1rem;" class="news-detail-content">{{ newsDetail.content }}</vue-markdown>
        <div class="tags-container">
          <span class="tags">
            <span></span>
            Tags
          </span>
          <span class="tags-name">{{ newsDetail.categories[0].title }}</span>
        </div>
        <ShareNetwork
          network="facebook"
          url="http://demo1259.surge.sh"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
          media="https://api.lussom.vn/uploads/Capture45_1dcfc4d8f3.png"
        >
          <img src="../../assets/news/btn_share.png" width="100px"/>
        </ShareNetwork>
        <!--
        <iframe
          [src]="urlSafe"
          width="77"
          height="28"
          style="border: none; overflow: hidden;"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>-->
        <h2 style="border-top: 1px solid #e2dfdf; padding-top: 1rem;">Bài viết liên quan</h2>
        <a-row class="news-relate">
          <a-col
            v-for="(item, i) in newsByCategories"
            :key="item.id"
            :span="12"
            style="padding: 0.5rem;"
          >
            <div
              class="news-relate-items"
              :if="i < 4"
              :style="{
                backgroundImage: getBackgroundElement(
                  api.API_ROOT,
                  item.banner.url
                ),
              }"
            >
              <router-link :to="{ path: '/news/detail', query: { newsId: item.id } }">
                <h3 @click="getDetailNewsFrom(item.id)" style="cursor: pointer;">{{ item.title }}</h3>
              </router-link>
              <span class="news-date">{{ convertDate(item.created_at) }}</span>
            </div>
            <!-- <img
              :if="i < 4"
              src="http://171.244.141.231:1337/uploads/2e52282cc54444e2a1669511f130de29.png"
              width="100%"
            />-->
            <a @click="getNewsFromRoute(item.id)" :if="i < 4">{{ item.name }}</a>
          </a-col>
        </a-row>
      </a-col>
      <a-col :md="8" style="padding: 0 1rem;" align='left'>
        <h2>Bài viết gần đây</h2>
        <div v-for="item of newsByCategories" :key="item.id">
          <div class="news-newest" fxFlex="row">
            <img :src="api.API_ROOT + item.thumbnail.url" width="30%" />
            <div
              style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 0.3rem;
          "
            >
              <router-link :to="{ path: '/news/detail', query: { newsId: item.id } }">
                <div @click="getDetailNewsFrom(item.id)">{{ item.title }}</div>
              </router-link>
              <span>{{ convertDate(item.created_at) }}</span>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getDetailNews } from "../../api/http-common";
import api from "../../api/api";
import { convertDate } from "../../ultils/resolve";
import VueMarkdown from "vue-markdown";
export default {
  name: "Detail",
  data() {
    return {
      newsDetail: {
        // banner: {
        //   url: "",
        //   content:null
        // }
      },
      newsByCategories: [],
      api: api
    };
  },
  methods: {
    convertDate(strDate) {
      return convertDate(strDate);
    },
    getBackgroundElement(urlRoot, urlImg) {
      return `url(${urlRoot}${urlImg})`;
    },
    getDetailNewsFrom(newsId) {
      getDetailNews(this, newsId);
    }
  },
  components: {
    VueMarkdown
  },
  created() {
    const newsId = this.$router.currentRoute.params.newsId;
    getDetailNews(this, newsId);
  }
};
</script>

<style lang="scss" scoped>
@import "./style/detail";
</style>
