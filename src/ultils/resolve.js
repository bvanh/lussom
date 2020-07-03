function convertDate(strDate) {
    let date = new Date(strDate);
    return date.toLocaleDateString();
}

export { convertDate };