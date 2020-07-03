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
      <a-col>
        <vue-markdown style="margin-top: 1rem;" class="news-detail-content">
          {{
          newsDetail.content
          }}
        </vue-markdown>
        <!--   <div class="tags-container">
          <span class="tags">
            <span></span>
            Tags
          </span>
          <span class="tags-name">{{ newsDetail.categories[0].title }}</span>
        </div>
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
          <div
            v-for="(item,index) in newsByCategories"
            :key="item.id"
            fxFlex.gt-xs="50%"
            style="padding: 0.5rem;"
          >
            <div
              class="news-relate-items"
              :if="index < 4"
              :style="{
            'backgroundImage':backgroundImage(api.API_ROOT,item.banner.url)
          }"
            >
              <router-link :to="{path:'/news/detail',query:{newsId:item.id}}">
                <h3 @click="getDetailNewsFrom(item.id)" style="cursor: pointer;">{{ item.title }}</h3>
              </router-link>
              <span class="news-date">{{ convertDate(item.created_at) }}</span>
            </div>
            <img
              *ngIf="i < 4"
              src="http://171.244.141.231:1337/uploads/2e52282cc54444e2a1669511f130de29.png"
              width="100%"
            />
            <a (click)="getNewsFromRoute(item.id)" *ngIf="i < 4">
              {{
              item.name
              }}
            </a>
          </div>
        </a-row>
      </a-col>
      <!-- <a-col fxFlex="30%" style="padding: 0 1rem;" fxHide.lt-md>
        <h2>Bài viết gần đây</h2>
        <div v-for="item of newsByCategory" :key="item.id">
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
      </a-col> -->
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
    const newsId = this.$router.currentRoute.query.newsId;
    getDetailNews(this, newsId);
  }
};
</script>

<style lang="scss" scoped>
@import "./style/detail";
</style>
