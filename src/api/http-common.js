import api from './api'
import axios from 'axios';
import { Modal } from 'ant-design-vue';
const baseApi = axios.create({
    baseURL: `${api.API_ROOT}`
})
function alertError(statusCode, message) {
    Modal.error({
        title: statusCode,
        content: message,
    });
}
const getDataJobs = (thisObj, path, params) => {
    baseApi
        .get(path, { params })
        .then(response => {
            thisObj.newsJobs = response.data;
            console.log(response.data)
        })
        .catch(e => {
            const { statusCode, message } = e.response.data;
            alertError(statusCode, message);
        });
}
const getDataNews = (thisObj, path, params) => {
    baseApi
        .get(path, { params })
        .then(response => {
            thisObj.listNews = response.data;
            console.log(response.data)
        })
        .catch(e => {
            const { statusCode, message } = e.response.data;
            alertError(statusCode, message);
        });
}
const getDetailNews = (thisObj, newsId) => {
    baseApi
        .get(`/posts/${newsId}`)
        .then(response => {
            thisObj.newsDetail = response.data;
            console.log(response.data);
            getNewsByCategories(thisObj, response.data.categories[0].id)
        })
        .catch(e => {
            const { statusCode, message } = e.response.data;
            alertError(statusCode, message);
        })
}
const getNewsByCategories = (thisObj, categoriesId) => {
    baseApi.get(`${api.API_CATEGORIES}/${categoriesId}`).then(response => {
        thisObj.newsByCategories = response.data.posts;
        console.log(response.data)
    }).catch(e => {
        const { statusCode, message } = e.response.data;
        alertError(statusCode, message);
    })
}

export { getDataJobs, getDataNews, getDetailNews };