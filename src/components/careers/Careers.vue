<template>
  <div class="news-container">
    <div class="news-header">
      <div>
        <h2>TUYỂN DỤNG</h2>
        <p>
          Các vị trí đang tuyển dụng của Lussom. Hãy xem có vị trí nào phù hợp
          với năng lực và nguyện vọng của bạn không nhé!
        </p>
      </div>
    </div>
    <div class="example-container">
      <!-- <table
      mat-table
      [dataSource]="
        jobs
          | paginate
            : { itemsPerPage: 10, currentPage: currentPage, totalItems: count }
      "
      class="table-jobs gfg"
    >
      <ng-container matColumnDef="title" sticky>
        <th mat-header-cell *matHeaderCellDef>Title</th>
        <td
          mat-cell
          *matCellDef="let element"
          routerLink="/careers/detail/{{ element.id }}"
          class="geeks"
          style="
            cursor: pointer;
            color: #1d81b7;
            font-weight: 500;
            outline: none;
          "
        >
          {{ element.name }}
        </td>
      </ng-container>
      <ng-container matColumnDef="categories">
        <th mat-header-cell *matHeaderCellDef>Categories</th>
        <td
          mat-cell
          *matCellDef="let element"
          style="margin: 1rem;"
          class="geeks"
          routerLink="/careers/detail/{{ element.id }}"
        
        >
          {{ element.categories }}
        </td>
      </ng-container>
      <ng-container matColumnDef="location">
        <th mat-header-cell *matHeaderCellDef>Location</th>
        <td
          mat-cell
          *matCellDef="let element"
          class="geeks"
          routerLink="/careers/detail/{{ element.id }}"
          style="cursor: pointer;"
        >
          {{ element.location }}
        </td>
      </ng-container>
      <ng-container matColumnDef="date" stickyEnd>
        <th mat-header-cell *matHeaderCellDef>Date</th>
        <td
          mat-cell
          *matCellDef="let element"
          class="geeks"
          routerLink="/careers/detail/{{ element.id }}"
          style="cursor: pointer;"
        >
          {{ element.expried | date: "dd-MM-yyyy" }}
          <span *ngIf="checkTimestamp(element.expried)" class="stick-new"
            >new</span
          >
          <span
            *ngIf="checkTimestampExpried(element.expried)"
            class="stick-expried"
            >Hết hạn</span
          >
        </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns; sticky: true"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>-->
      <a-table :columns="columns" :data-source="newsJobs" class="table-jobs" :pagination="false">
        <span slot="time" slot-scope="text">
          {{ convertDateStr(text) }}
          <span v-if="checkTimestamp(text)" class="stick-new">new</span>
          <span v-if="checkTimestampExpried(text)" class="stick-expried">Hết hạn</span>
        </span>

        <span slot="name" slot-scope="text, record">
          <router-link
            :to="{ name: 'jobsDetail', params: { jobsId: record.id } }"
            style="
            cursor: pointer;
            color: #3e95c5;
            font-weight: bold;
            outline: none;
          "
          >{{ text }}</router-link>
        </span>
      </a-table>
      <a-pagination
        :item-render="itemRender"
        :total="totalJobs"
        @change="onChangePageJobs"
        class="pagination-jobs"
      />
    </div>
  </div>
</template>

<script>
import { getDataJobs, getTotalJobs } from "../../api/http-common";
import {
  convertDate,
  checkTimestampExpried,
  checkTimestamp
} from "../../ultils/resolve";
const columns = [
  {
    title: "Title",
    dataIndex: "name",
    // fixed: 'left',
    scopedSlots: { customRender: "name" }
  },
  {
    title: "Categories",
    dataIndex: "categories",
    scopedSlots: { customRender: "categories" }
  },
  {
    title: "Location",
    dataIndex: "location",
    scopedSlots: { customRender: "location" }
  },
  {
    title: "Date",
    dataIndex: "created_at",
    scopedSlots: { customRender: "time" }
  }
];
export default {
  name: "jobs",
  data() {
    return {
      newsJobs: [],
      totalJobs: null,
      columns: columns,
      params: {
        _limit: 10,
        _start: 0
      }
    };
  },
  methods: {
    convertDateStr(strDate) {
      return convertDate(strDate);
    },
    checkTimestampExpried(strDate) {
      return checkTimestampExpried(strDate);
    },
    checkTimestamp(strDate) {
      return checkTimestamp(strDate);
    },
    itemRender(current, type, originalElement) {
      if (type === "prev") {
        return <a>Previous</a>;
      } else if (type === "next") {
        return <a>Next</a>;
      }
      return originalElement;
    },
    onChangePageJobs(page) {
      const newParams = this.params;
      if (page === 1) {
        newParams._start = 0;
      } else {
        newParams._start = (page / 2) * 10;
      }
      this.params = newParams;
    }
  },
  watch: {
    params: {
      deep: true,
      handler() {
        getDataJobs(this, "/recruitments", this.params);
      }
    }
  },
  // computed: {
  //   getDataJobs() {
  //     let data1 = [];
  //     const data = getDataJobs(this, "/recruitments", this.params);
  //     data.then(dataJobs => (data1 = dataJobs));
  //     return data1;
  //   }
  // },
  created() {
    const params = this.params;
    getDataJobs(this, "/recruitments", this.params);
    getTotalJobs(this, "/recruitments/count", params);
  }
};
</script>

<style src="./style/carees.scss" lang="scss"></style>
