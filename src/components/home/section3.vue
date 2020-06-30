<template>
  <a-row type="flex" class="section2">
    <div>
      <img src="../../assets/section2-background.png" width="100%" class="section2-background" />
    </div>
    <a-row class="section2-content" type="flex">
      <a-col :md="{ span: 24, order: 1 }" :lg="{ span: 12,order:2 }">
        <img src="../../assets/we-are-lussom.png" />
      </a-col>
      <a-col
        style="margin-top: 1rem;"
        :md="{ span: 24, order: 2 }"    
        :lg="{ span: 12,order:1}"
        class="section2-content-container"
      >
        <div class="section-title">
          <span style="color: #1499df;paddingRight:.5rem">Lussom</span>
          <span>làm gì?</span>
        </div>
        <p class="section-content">
          Ngoài các dự án phát hành dịch vụ game tại Việt Nam từ nguồn game chất
          lượng cao của nước ngoài, chúng tôi đang xây dựng chu trình tuần hoàn
          tái đầu tư phát triển game, cũng như thực hiện dự án hạ tầng và tích
          hợp game đa dạng để có thể không ngừng cung cấp dịch vụ game chất
          lượng cao cho người dùng.
        </p>
        <!-- <button mat-raised-button class="btn-read-more">Read more >></button> -->
      </a-col>
    </a-row>
  </a-row>
</template>

<script>
export default {};
</script>

<style src="./style/section3.scss" lang="scss" scoped></style>
