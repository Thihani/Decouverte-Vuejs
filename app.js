new Vue({
    el: '#app',
    data: {
        message1: 'Message number 1',
        message2: 'Message number 2',
        inputH2:null,
        addClass:false,
        displayImg:false,

    },
    methods:{
        mess2: function(){
            this.message2 = this.inputH2;
        }
        
    }
})