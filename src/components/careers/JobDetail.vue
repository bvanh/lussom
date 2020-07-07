<template>
  <div>
    <div class="news-header">
      <div>
        <h2>TUYỂN DỤNG</h2>
        <p>Các vị trí đang tuyển dụng của Lussom. Hãy xem có vị trí nào phù hợp với năng lực và nguyện vọng của bạn không nhé!</p>
      </div>
    </div>
    <a-row  class="detail-container">
      <a-col style="margin-right: 1%;" class="job-require">
        <div class="frame">
          <h2>Why should you apply for this position</h2>
          <vue-markdown>{{jobsDetail.reason}}</vue-markdown>
          <h2>Jobs Description</h2>
          <vue-markdown>{{jobDetail.description}}</vue-markdown>
          <h2>Your Skill and Experience</h2>
          <vue-markdown>{{jobDetail.Skill}}</vue-markdown>
          <!-- <div class="form-apply">
            <span class="input-cv">
              Full name*
              <input
                placeholder="Your name"
                name="name"
                required
                [(ngModel)]="applications.name"
                (keyup)="getCv($event)"
              />
            </span>
            <span class="input-cv">
              Email*
              <input
                placeholder="Your Email"
                type="email"
                name="email"
                [(ngModel)]="applications.email"
                (keyup)="getCv($event)"
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
                [(ngModel)]="applications.phone"
                (keyup)="getCv($event)"
                required
              />
            </span>
            <div class=”button-wrap”>
        <label class =”new-button” for=”upload”> Upload CV</label>
        <input id=”upload” type=”file” >
            </div>
            <span class="attact-cv">
              Resume/CV*
              <div>
                <label for="cv">
                  <img src="../../assets/detail/attach.png" />Attach
                  resume/CV
                </label>
                <span>
                  {{
                  fileToUpload === null ? "Chưa chọn tập tin..." : fileToUpload.name
                  }}
                </span>
              </div>
              <input
                placeholder="Your CV"
                id="cv"
                type="file"
                name="cv"
                accept=".pdf, .docx"
                [(ngModel)]="fileToUpload"
                (change)="onFileChange($event)"
                observeFiles
                style="display: none;"
              />
            </span>
            <div class="submit-btn">
              <div style="width: 50%;">
                <button (click)="onSubmitCv()" class="submit-btn-ok">Submit Now</button>
                <button (click)="clearInputCv()" class="submit-btn-cancel">Clear</button>
              </div>
            </div>
          </div>
        </div>
          <h2>More Jobs For You</h2>-->
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
        </div>
      </div>
      <div fxFlex="30%" fxFlex.lt-md="100%" class="job-more-info">
        <div>
          <h2>{{ jobsDetail.title }}</h2>
          <div class="salary">
            <img src="../../assets/detail/salary-icon.png" class="icon-salary" />
            <h3>Salary:</h3>
            Up to {{ jobsDetail.salary }} $
          </div>
          <div class="location">
            <img src="../../assets/detail/location-icon.png" class="icon-salary" />
            <h3>Address:</h3>
            {{ jobsDetail.location }}
          </div>
          <h3>{{ jobsDetail.vacancies }} Vị trí còn trống.</h3>
          <h3>{{ jobsDetail.experience }}+ Năm kinh nghiệm.</h3>-->
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { getDetailJobs } from "../../api/http-common";
import VueMarkdown from "vue-markdown";
export default {
  name: "JobsDetail",
  data() {
    return {
      jobDetail: {}
    };
  },
  created() {
    const jobsId = this.$router.currentRoute.params.jobsId;
    getDetailJobs(this, jobsId);
  },
  components: {
    VueMarkdown
  }
};
</script>

<style src='./style/detail.scss' lang='scss'>
</style>