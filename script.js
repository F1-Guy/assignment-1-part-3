Vue.createApp({
    data() {
        return {
            string: null,
            times: null,
            result: null,
        };
    },

    methods: {
        replicate() {
            if (this.times > 0) {
                this.result = this.string.repeat(this.times);
            }
            else if (this.times == 0) {
                this.result = "You can't replicate a string 0 times.";
            }
            else {
                let reversed
                reversed = this.string.split('').reverse().join('');
                this.result = "I see what you tried to do there!\n" + reversed.repeat(Math.abs(this.times));
            }
        },
    },
}).mount("#app");
