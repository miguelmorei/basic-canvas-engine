
const Hours = 24;
const Minutes = 60;
const Days = 30;
const DayLength = 30; //in seconds
const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const Year = [0, 0];

export default class Time {

    constructor (options) {

        options = options || {};
        
        this.maxDayCount = options.maxDayCount || Days;
        this.realTimeDayLength = options.realTimeDayLength || DayLength;
        this.months = options.months || Months;
        this.minMaxYear = options.minMaxYear || Year;
        this.maxHours = options.maxHourCount || Hours;
        this.maxMinutes = options.maxMinuteCount || Minutes;
        
        this.setCurrentTime([1, 1, 1, this.months[0], 1]);

        if(options.currentTime){

            this.setCurrentTime(options.currentTime);
        }

    }

    setCurrentTime(currentTime) {


        this.currentHour = currentTime[0] || this.currentHour;
        this.currentMinute = currentTime[1] || this.currentMinute;
        this.currentDay = currentTime[2] || this.currentDay;
        this.currentMonth = currentTime[3] || this.currentMonth;
        this.currentYear = currentTime[4] || this.currentYear;

        return this.getCurrentTime();

    }

    getCurrentTime () {

        return {
            hour : this.currentHour,
            minute : this.currentMinute,
            day : this.currentDay,
            month : this.currentMonth,
            year : this.currentYear
        }

    }

    startClock () {

        this.clock = window.setTimeout(()=>{
            this.updateClock();
        }, this.realTimeDayLength);

    }

    pauseClock () {

    }

    clock () {

    }

}