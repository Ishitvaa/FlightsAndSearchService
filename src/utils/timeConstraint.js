function compareTime(timeString1, timeString2){
    let dateString1 = new Date(timeString1);
    let dateString2 = new Date(timeString2);

    return dateString1.getTime() > dateString2.getTime();
}

module.exports = {
    compareTime
}