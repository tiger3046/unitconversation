const app = Vue.createApp({
    data:() => ({
        km:0,
        m:0,
        cm:0,
        L:0,
        ml:0,
        KmPerHour:0,
        MPerMinute:0,
        CmPerSec:0
    }),
    watch:{
        km:function(value){
            console.log(value)
            this.km = value
            this.m=value*1000
            this.cm=value*100000
        },
        m:function(value){
            this.km = value/1000
            this.cm = value*100
            this.m = value
        },
        cm:function(value){
            this.km = value/100000
            this.cm = value
            this.m = value/100
        },
        L:function(value){
            console.log(value)
            this.L = value
            this.ml=value*1000
        },
        ml:function(value){
            this.L = value/1000
            this.ml = value
        },
        KmPerHour:function(value){
            this.MPerMinute = value/60
            this.KmPerHour = value
            this.CmPerSec = value/3600
        },
        MPerHour:function(value){
            this.MPerMinute = value
            this.KmPerHour = value*60
            this.CmPerSec = value/60
        },
        CmPerSec:function(value){
            this.CmPerSec = value
            this.KmPerHour = value*3600
            this.MPerMinute = value*60
        }
    }
})
app.mount('#app')
