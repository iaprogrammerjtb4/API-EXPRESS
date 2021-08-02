const url = 'http://localhost:3000/'
const app = Vue.createApp({
    el:'#app',    
    template:
    /*html*/
    `
    <div class="container bg-ligth">
        <app-view1 v-if="isOne"></app-view1>
        <app-view2 v-if="isTwo"></app-view2>
        <span @click="listStuff" v-if="isTwo" class="btn btn-info text-white">Volver</span>
    </div>    
    `,
    data(){
        return{
            isOne:true,
            isTwo:false,            
        }
    },
    methods:{
        listStuff:function(){
            /**killer sessión API */
            this.isOne = true
            this.isTwo = false
        },    
        viewMov:function(){            
            /**login API */
            this.isOne = false
            this.isTwo = true            
        }
    },
    // beforeMount(){

    // },
    // mounted(){

    // },
})
