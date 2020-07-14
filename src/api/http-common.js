import api from "./api";
import axios from "axios";
// import qs from 'qs'
import { Modal } from "ant-design-vue";
const baseApi = axios.create({
  baseURL: `${api.API_ROOT}`,
});
function alertError(statusCode, message) {
  Modal.error({
    title: statusCode,
    content: message,
  });
}
const getDataJobs = (thisObj, path, params) => {
  baseApi
    .get(path, { params })
    .then((response) => {
      thisObj.newsJobs = response.data;
      // return dataJobs
      // return response.data;
      // console.log(response.data)
    })
    .catch((e) => {
      const { statusCode, message } = e.response.data;
      alertError(statusCode, message);
    });
};
const getTotalJobs = (thisObj, path, params) => {
  baseApi
    .get(path, { params })
    .then((response) => {
      thisObj.totalJobs = response.data;
      // console.log(response.data)
    })
    .catch((e) => {
      const { statusCode, message } = e.response.data;
      alertError(statusCode, message);
    });
};
const getDetailJobs = (thisObj, jobsId) => {
  baseApi
    .get(`/recruitments/${jobsId}`)
    .then((response) => {
      thisObj.jobDetail = response.data;
      console.log(response.data)
    })
    .catch((e) => {
      const { statusCode, message } = e.response.data;
      alertError(statusCode, message);
    });
};
const getDataNews = (thisObj, path, params) => {
  baseApi
    .get(path, { params })
    .then((response) => {
      thisObj.listNews = response.data;
      console.log(response.data);
    })
    .catch((e) => {
      const { statusCode, message } = e.response.data;
      alertError(statusCode, message);
    });
};
const getDetailNews = (thisObj, newsId) => {
  baseApi
    .get(`/posts/${newsId}`)
    .then((response) => {
      thisObj.newsDetail = response.data;
      console.log(response.data);
      getNewsByCategories(thisObj, response.data.categories[0].id);
    })
    .catch((e) => {
      const { statusCode, message } = e.response.data;
      alertError(statusCode, message);
    });
};
const getNewsByCategories = (thisObj, categoriesId) => {
  baseApi
    .get(`${api.API_CATEGORIES}/${categoriesId}`)
    .then((response) => {
      thisObj.newsByCategories = response.data.posts;
      console.log(response.data);
    })
    .catch((e) => {
      const { statusCode, message } = e.response.data;
      alertError(statusCode, message);
    });
};
// upload data
const uploadApplications = (thisObj, path, params) => {
  const { name, phone, email, cv } = params;
  let formData = new FormData();
  formData.append('cv', cv);
  formData.append('name', name);
  formData.append('phone', phone);
  formData.append('email', email);
  baseApi.post(path, formData, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    }
  }).then(res => {
    console.log(res)
  }).catch(e => {
    console.log(e.response)
  })
}
const uploadCv = (thisObj, path, file) => {
  let formData = new FormData();
  formData.append('files', file)
  baseApi.post(path, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then(res => {
    console.log(res)
  }).catch(e => {
    console.log(e.response)
  })
}

export { getDataJobs, getDataNews, getDetailNews, getTotalJobs, getDetailJobs, uploadCv, uploadApplications };
