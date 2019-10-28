
const Hours = 24;
const Minutes = 60;
const Days = 10;
const DayLength = 30; //in seconds
const Months = ['January', 'February', ];
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
            
        this.init(options);
    }

    init(options) {

        this.setCurrentTime([1, 1, 1, this.months[0], 1]);

        if(options.currentTime){

            this.setCurrentTime(options.currentTime);
        }

        this.startClock();


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
        }, 1000);

    }

    updateClock() {

        if(this.currentMinute + 1 < this.maxMinutes) {

            this.currentMinute += 1;

        } else {

            this.currentMinute = 0;
            
            if(this.currentHour + 1 < this.maxHours) {

                this.currentHour += 1;

            } else {

                this.currentHour = 0;

                if(this.currentDay + 1 < this.maxDayCount) {

                    this.currentDay += 1;
    
                } else {
    
                    this.currentDay = 0;

                    if(this.months.indexOf(this.currentMonth) + 1 < this.months.length) {

                        this.currentMonth = this.months[this.months.indexOf(this.currentMonth) + 1];

                    } else {

                        this.currentMonth = this.months[0];

                        if(this.minMaxYear[1] == 0 || this.currentYear + 1 < this.minMaxYear[1]) {

                            this.currentYear += 1;

                        } 

                    }
    
                }

            }

        }

        this.clock = window.setTimeout(()=>{
            this.updateClock();
        }, (this.maxHours * this.maxMinutes) / 30);
        
        
        console.log(this.getCurrentTime());

    }
    

    pauseClock () {

    }

    clock () {

    }

}