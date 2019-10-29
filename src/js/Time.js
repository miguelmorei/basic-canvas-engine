import Timestamp from './Timestamp';


const Hours = 2;
const Minutes = 4;
const Days = 2;
const DayLength = 10; //in seconds
const Months = ['January', 'February', ];
const Year = [0, 0];

export default class Time {

    constructor (options) {

        options = options || {};
        
        this.maxDays = options.maxDays || Days;
        this.realTimeDayLength = options.realTimeDayLength || DayLength;
        this.months = options.months || Months;
        this.minMaxYear = options.minMaxYear || Year;
        this.maxHours = options.maxHourCount || Hours;
        this.maxMinutes = options.maxMinuteCount || Minutes;
        this.subscriptions = [];
        this.currentTimestamp = {};
            
        this.init(options);
    }

    init(options) {

        this.setCurrentTimestamp(new Timestamp([1, 1, 1, this.months[0], 1], this));

        console.log(new Timestamp([1, 1, 1, this.months[0], 1], this));

        if(options.currentTime){

            this.setCurrentTimestamp(options.currentTime);
        }

        this.startClock();


    }

    subscribe () {



    }

    setCurrentTimestamp(currentTimestamp) {


        this.currentTimestamp = currentTimestamp;

        return this.getCurrentTime();

    }

    getCurrentTime () {

        return this.currentTimestamp;

    }

    startClock () {

        this.clock = window.setTimeout(()=>{
            this.updateClock();

            
        }, 1000);

    }

    updateClock() {

        this.currentTimestamp = this.currentTimestamp.addMinutes(1);
        
        this.clock = window.setTimeout(()=>{
            this.updateClock();
        }, 1000);
        
        console.log(this.getCurrentTime());

    }


    
    

    pauseClock () {

    }

    clock () {

    }

}