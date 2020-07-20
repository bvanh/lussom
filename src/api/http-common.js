import api from "./api";
import axios from "axios";
import { alertError, alertSuccess } from '../ultils/alert'
// import qs from 'qs'
const baseApi = axios.create({
  baseURL: `${api.API_ROOT}`,
});

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
      // console.log(response.data)
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
      // console.log(response.data);
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
      // console.log(response.data);
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
      // console.log(response.data);
    })
    .catch((e) => {
      const { statusCode, message } = e.response.data;
      alertError(statusCode, message);
    });
};
// upload data
const uploadApplications = async (thisObj, path, params, file) => {
  let formData = await new FormData();
  await formData.append('files.file', file, file.name);
  await formData.append('data', JSON.stringify(params));
  baseApi.post(path, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  }).then((res) => {
    // console.log(res)
    if (res.status === 200) {
      thisObj.applications = {};
      thisObj.cv = null;
      alertSuccess('Gửi CV thành công !')
    }
  }).catch(e => {
    console.log(e.response)
  })
}
// send feedback
const sendFeedback = (thisObj, params) => {
  baseApi.post(api.FEEDBACK, params)
    .then(res => {
      if(res.status===200){
        thisObj.indexFeedbacks = {};
        alertSuccess('Gửi feedback thành công !')
      }
    })
    .catch(e => {
      console.log(e)
    })
}


export { getDataJobs, getDataNews, getDetailNews, getTotalJobs, getDetailJobs, uploadApplications, sendFeedback };
