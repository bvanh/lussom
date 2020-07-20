<template>
  <div>
    <div class="news-header">
      <div>
        <h2>TUYỂN DỤNG</h2>
        <p>
          Các vị trí đang tuyển dụng của Lussom. Hãy xem có vị trí nào phù hợp
          với năng lực và nguyện vọng của bạn không nhé!
        </p>
      </div>
    </div>
    <a-row class="detail-container" type="flex" justify="space-between">
      <a-col :md="16" class="job-require">
        <div class="frame">
          <h2>Why should you apply for this position</h2>
          <vue-simple-markdown :source="jobDetail.reason"></vue-simple-markdown>
          <h2>Jobs Description</h2>
          <vue-simple-markdown :source="jobDetail.description"></vue-simple-markdown>
          <h2>Your Skill and Experience</h2>
          <vue-simple-markdown :source="jobDetail.Skill"></vue-simple-markdown>
          <div class="form-apply">
            <span class="input-cv">
              Full name*
              <input
                placeholder="Your name"
                name="name"
                required
                :value="applications.name"
                @input="getData($event)"
              />
            </span>
            <span class="input-cv">
              Email*
              <input
                placeholder="Your Email"
                type="email"
                name="email"
                :value="applications.email"
                @input="getData($event)"
                required
              />
            </span>
            <span class="input-cv">
              Phone Number*
              <input
                class="input-cv"
                placeholder="Your number"
                name="phone"
                type="number"
                :value="applications.phone"
                @input="getData($event)"
                required
              />
            </span>
            <span class="attact-cv">
              Resume/CV*
              <div>
                <label for="cv">
                  <img src="../../assets/detail/attach.png" /><span>
                  {{
                  cv === null ? "Chưa chọn tập tin..." : cv.name
                  }}
                </span>
                </label>
              </div>
              <input
                placeholder="Your CV"
                id="cv"
                type="file"
                name="cv"
                accept=".pdf, .docx"
                @input="getFileCv($event)"
                style="display: none;"
              />
            </span>
            <div class="submit-btn">
              <div style="width: 50%;">
                <button @click="onSubmitCv" class="submit-btn-ok">Submit</button>
                <button @click="onClearCv" class="submit-btn-cancel">Clear</button>
              </div>
            </div>
          </div>
          <!-- <h2>More Jobs For You</h2>-->
          <!--   <div class="jobs-relate" *ngFor="let item of jobs">
          <span
            (click)="getJobsFromRoute(item.id)"
            class="title"
          >{{ item.name }}</span>
          <span style="padding-left: 1rem; border-left: 1px solid #b5b5b5;">
            {{ item.expried | date: "dd-MM-yyyy" }}
            <span
              *ngIf="checkTimestamp(item.expried)"
              class="stick-new"
            >new</span>
          </span>
          </div>-->
        </div>
      </a-col>
      <a-col :md="8" class="job-more-info">
        <div>
          <!-- <h2>{{ jobsDetail.title }}</h2> -->
          <div class="salary">
            <img src="../../assets/detail/salary-icon.png" class="icon-salary" />
            <h3>Salary:</h3>
            Up to {{ jobDetail.salary }} $
          </div>
          <div class="location">
            <img src="../../assets/detail/location-icon.png" class="icon-salary" />
            <h3>Address:</h3>
            {{ jobDetail.location }}
          </div>
          <h3>{{ jobDetail.vacancies }} Vị trí còn trống.</h3>
          <h3>{{ jobDetail.experience }}+ Năm kinh nghiệm.</h3>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getDetailJobs, uploadApplications } from "../../api/http-common";
import {
  validatePhone,
  validateEmail,
  validateUsername,
  validateFileAndFeedback
} from "../../ultils/checkInfo";
// import VueMarkdown from "vue-markdown";
export default {
  name: "JobsDetail",
  data() {
    return {
      jobDetail: {},
      applications: {
        name: "",
        phone: "",
        email: ""
      },
      cv: null
    };
  },
  methods: {
    getData(e) {
      const { name, value } = e.target;
      this.applications[name] = value;
    },
    getFileCv(e) {
      this.cv = e.target.files[0];
    },
    onSubmitCv() {
      const { name, phone, email } = this.applications;
      if (
        validateUsername(name) &&
        validateEmail(email) &&
        validatePhone(phone) &&
        validateFileAndFeedback(this.cv,'file đính kèm !')
      ) {
        uploadApplications(this, "/cvs", this.applications, this.cv);
      }
    },
    onClearCv() {
      const newCv = {
        name: "",
        phone: "",
        email: ""
      };
      this.applications = newCv;
    }
  },
  created() {
    const jobsId = this.$router.currentRoute.params.jobsId;
    getDetailJobs(this, jobsId);
  },
  components: {
    // "vue-markdown": VueMarkdown
  }
};
</script>

<style src="./style/detail.scss" lang="scss"></style>
