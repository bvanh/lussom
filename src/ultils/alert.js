import { Modal } from "ant-design-vue";

function alertError(statusCode, message) {
    Modal.error({
        title: statusCode,
        content: message,
    });
}
function alertSuccess(title, message) {
    Modal.success({
        title: title,
        content: message
    })
}
export { alertError, alertSuccess }