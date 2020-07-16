<template>
  <div>
    <div class="news-header">
      <div>
        <h2>LIÊN HỆ</h2>
        <p>Liên hệ ngay để nhận những giải đáp cũng như thông tin mới nhất.</p>
      </div>
    </div>
    <a-row class="detail-container">
      <a-col :sm="12" class="contact-info">
        <h2 class="contact-title">LIÊN HỆ GÓP Ý!</h2>
        <p style="margin-bottom: 1rem;">
          Nếu có bất kỳ thắc mắc hoặc góp ý xin vui lòng điền thông tin vào Form bên
          và gửi cho chúng tôi để được hỗ trợ tốt nhất.
        </p>
        <h2 class="contact-title">LUSSOM INFO</h2>
        <p>Website: lussom.vn</p>
        <p>Địa chỉ: Tầng 4, tòa nhà Euro Windows, 27 Trần Duy Hưng, Cầu Giấy, Hà Nội.</p>
        <p>Email: contact@lussom.vn</p>
        <p>Phone: +84 243 221 6272</p>
      </a-col>
      <a-col :sm="12" class="input-feedback">
        <input
          :value="indexFeedbacks.name"
          placeholder="Your name"
          @input="getIndexFeedbacks($event)"
          name="name"
        />
        <input
          :value="indexFeedbacks.email"
          placeholder="Your email*"
          @input="getIndexFeedbacks($event)"
          name="email"
        />
        <textarea
          name="feedbacks"
          :value="indexFeedbacks.feedbacks"
          rows="5"
          cols="50"
          @input="getIndexFeedbacks($event)"
          placeholder="Your meassage here...*"
        ></textarea>
        <button class="btn-submit-feedback" @click="onSendFeedback()">GỬI</button>
      </a-col>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.4779785539677!2d105.80139841403287!3d21.013552586006618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5fe4a55881%3A0x25e65dfc96ed032e!2sEurowindow%20Multi-Complex!5e0!3m2!1svi!2s!4v1587943617493!5m2!1svi!2s"
        width="100%"
        height="450"
        frameborder="0"
        style="border: 0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
        class="iframe-map"
      ></iframe>
    </a-row>
  </div>
</template>

<script>
import { sendFeedback } from "../../api/http-common";
import {
  validateUsername,
  validateEmail,
  validateFileAndFeedback
} from "../../ultils/checkInfo";
export default {
  name: "Contact",
  data() {
    return {
      indexFeedbacks: {
        name: "",
        email: "",
        feedbacks: null
      }
    };
  },
  methods: {
    getIndexFeedbacks(e) {
      const { name, value } = e.target;
      this.indexFeedbacks[name] = value;
    },
    onSendFeedback() {
      const { name, email, feedbacks } = this.indexFeedbacks;
      if (
        validateUsername(name) &&
        validateEmail(email) &&
        validateFileAndFeedback(feedbacks,'thông tin feedback !')
      )
        sendFeedback(this, this.indexFeedbacks);
    }
  }
};
</script>

<style src='./style/contact.scss' lang='scss'>
</style>