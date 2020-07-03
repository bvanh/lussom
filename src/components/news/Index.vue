<template>
  <div class="news-container">
    <div class="news-header">
      <div>
        <h2>TIN TỨC</h2>
        <p>
          Thông tin mới nhất về các sản phẩm của Lussom, cũng như các hoạt động
          của công ty.
        </p>
      </div>
    </div>
    <a-row class="list-news">
      <a-col v-for="item in listNews" :key="item.id" class="news-items" :lg="{ span: 6 }">
        <router-link :to="{ path: '/news/detail', query: { newsId: item.id }}">
          <img :src="api.API_ROOT + item.thumbnail.url" width="100%" style="cursor: pointer;" />
          <h3 style="cursor: pointer;">{{ item.title }}</h3>
        </router-link>
        <p class="short-content">{{ item.shortContent }}</p>
        <a-row class="news-footer" justify="space-between" type="flex">
          <div class="news-footer-date">{{ convertDate(item.created_at)}}</div>
          <router-link :to="{ path: '/news/detail', query: { newsId: item.id }}">
            <div class="news-footer-readmore">
              <img src="../../assets/news/icon-book.png" />Read more
            </div>
          </router-link>
        </a-row>
      </a-col>
    </a-row>
    <!-- <div class="pagination">
      <pagination-controls (pageChange)="getPage($event)" class="pagination-items"></pagination-controls>
    </div>-->
  </div>
</template>

<script>
import { getDataNews } from "../../api/http-common";
import api from "../../api/api";
import { convertDate } from "../../ultils/resolve";
export default {
  name: "news",
  data() {
    return {
      listNews: [],
      api: api,
      params: {
        _limit: 10,
        _start: 0
      }
    };
  },
  methods: {
    convertDate(strDate) {
     return convertDate(strDate)
    }
  },
  created() {
    getDataNews(this, "/posts", this.params);
  }
};
</script>

<style lang="scss">
@import "./style/news";
</style>
