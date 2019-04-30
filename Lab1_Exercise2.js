
function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay(); // 0-6 (0: Sunday)
    const result = day => [0,6].indexOf(day)? 'Weekday' : 'Weekend'
    console.log(result());
}
isWeekend();
