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
export { getDataJobs };