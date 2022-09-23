Vue.createApp({
    data() {
        return {
            string: null,
            times: null,
            result: null
        };
    },

    methods: {
        // Implementation using the built-in repeat() method
        replicateString() {
            if (this.times > 0) {
                this.result = this.string.repeat(this.times);
            }
            else if (this.times == 0) {
                alert("You can't replicate a string 0 times.");
            }
            else {
                alert("Times must be a positive integer. And it can't be " + this.times);
                let reversed
                reversed = this.string.split('').reverse().join('');
                this.result = "I see what you tried to do there!\n" + reversed.repeat(Math.abs(this.times));
            }
        },

        // Alternative implementation using a for loop
        replicateStringIter() {
            let result = "";
            if (this.times > 0) {
                for (let i = 0; i < this.times; i++) {
                    result += this.string;
                }
            }
            else if (this.times == 0) {
                alert("You can't replicate a string 0 times.");
            }
            else {
                alert("Times must be a positive integer. And it can't be " + this.times);
            }

            this.result = result;
        },
    },
}).mount("#app");
