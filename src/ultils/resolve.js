function convertDate(strDate) {
    let date = new Date(strDate);
    return date.toLocaleDateString();
}
function checkTimestamp(strDate) {
    let today = new Date().getTime();
    let dateApply = new Date(strDate).getTime();
    let expried = today - dateApply;
    if (expried < 0) {
        return true;
    } else {
        return false;
    }
}
function checkTimestampExpried(strDate) {
    let today = new Date().getTime();
    let dateApply = new Date(strDate).getTime();
    let expried = today - dateApply;
    if (expried > 0) {
        return true;
    } else {
        return false;
    }
}
export { convertDate, checkTimestampExpried, checkTimestamp };