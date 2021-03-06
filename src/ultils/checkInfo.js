import { alertError } from './alert'
function validateUsername(username) {
    var re = /^[a-z]{2,30}$/;
    let testRegex = re.test(String(username).toLowerCase());
    switch (testRegex) {
        case false:
            alertError('Kiểm tra lại tên !')
            break;
        default:
            return true;
    }

}
function validatePhone(phone) {
    let re = /(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/;
    let testPhone = re.test(phone)
    switch (testPhone) {
        case false:
            alertError('Kiểm tra lại số điện thoại !')
            break;
        default:
            return true
    }
}
function validateEmail(email) {
    let regex = /^[a-z][a-z0-9]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    let testEmail = regex.test(email);
    switch (testEmail) {
        case false:
            alertError("Kiểm tra lại email !")
            break;
        default:
            return true;
    }
}
function validateFileAndFeedback(file, message) {
    switch (file) {
        case null:
            alertError(`Kiểm tra lại ${message}`)
            break;
        default:
            return true;
    }
}
export { validateEmail, validatePhone, validateUsername, validateFileAndFeedback };
