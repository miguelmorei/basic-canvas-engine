

export default class Timestamp {
    
    constructor(options, time) {

        this.minute = options[0] || 0;
        this.hour = options[1] || 0;
        this.day = options[2] || 0;
        this.month = options[3] || time.months[0];
        this.year = options[4] || 0;
        this.time = time;

    }


    update (params) {

        if(params[0] != null) {

            if(this.minute + params[0] > this.time.maxMinutes) {

                this.minute = 0;

            } else {

                this.minute += params[0];

            }
            
        } 

        if(params[1] != null) {

            if(this.hour + params[1] > this.time.maxHours) {

                this.hour = 0;

            } else {

                this.hour += params[1];

            }
            
        } 


        if(params[2] != null) {

            if(this.day + params[2] > this.time.maxDays) {

                this.day = 0;

            } else {

                this.day += params[2];

            }
            
        } 

        if(params[3] != null) {
            
            if(this.time.months.indexOf(this.month) + params[3] < this.time.months.length) {

                this.month = this.time.months[this.time.months.indexOf(this.month) + params[3]];

            } else {

                this.month = this.time.months[0];

            }
            
        } 

        if(params[4] != null) {

            if(this.time.minMaxYear[1] == 0 || this.year + 1 < this.time.minMaxYear[1]) {

                this.year += 1;

            } 

        }

        return this;
        
    }


    addMinutes(value) {

        if(this.minute + value > this.time.maxMinutes) {

            this.minute = 0; 
            this.addHours(1);

        } else {

            this.minute += value;

        }

        return this;


    }

    addHours(value) {

        if(this.hour + value > this.time.maxHours) {

            this.hour = 0;
            this.addDays(1);

        } else {

            this.hour += value;

        }

        return this;

    }


    addDays(value) {

        if(this.day + value > this.time.maxDays) {

            
            this.day = 0;
            this.addMonths(1);

        } else {

            this.day += value;

        }

        return this;

    }


    addMonths(value) {

        if(this.time.months.indexOf(this.month) + value < this.time.months.length) {

            this.month = this.time.months[this.time.months.indexOf(this.month) + value];

        } else {

            this.month = this.time.months[0];
            this.addYears(1);

        }

        return this;

    }


    addYears(value) {

        if(this.time.minMaxYear[1] == 0 || this.year + value < this.time.minMaxYear[1]) {

            this.year += 1;

        } 

        return this;

    }




}