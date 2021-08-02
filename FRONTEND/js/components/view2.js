app.component('app-view2',{
    template:`
        <div class="row">                                    
            <span class="mt-2 mb-5 h3">Movements of {{ name }}</span>
            <app-view2-form></app-view2-form>            
            <app-view2-grid></app-view2-grid>            
        </div>
    `,
    data(){
        return{
            name:'Stuff3',
            description:'lorem ipsu',
            quantity:0,

        }
    },
    methods:{

    }
})

app.component('app-view2-form',{
    template:
        /*html*/`
        <form class="row mt-5">
            <div class="form-group col-5" >
                <label>Description:</label>
                <input v-model="description" type="text" class="form-control">
            </div>
            <div class="form-group col-1" >                
                <label></label>
                <input v-model="quantity" type="number" class="form-control">
            </div>
            <div class="form-group col-2">
                
            </div>
            <div class="col-2">
                <img src="./img/plus.png" width="50" heigth="50"/>
            </div>
            <div class="col-2">
                <img src="./img/less.png" width="50" heigth="50"/>
            </div>
        </form>
    `,
    data(){
        return{
            name:'stuf3',
            description:'Lorem ipsu loream',
            quantity:123
        }
    },
    methods:{
        insertStuff:function(){
            // Ejemplo implementando el metodo POST:
            var data = { 
                stu_name     : this.stuff.name, 
                stu_state    : this.stuff.state,
                stu_quantity : 0,                
            }                         
            fetch(url, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },                                
                body: JSON.stringify(data) // body data type must match "Content-Type" header                    
                }).then(
                    
                );                                                      
                
        }                
    }
})

app.component('app-view2-grid',{
    template:
        /*html*/`
        <div class="mt-5">        
        <table class="table table-bordered table-hover">
            <thead>
            <tr class="text-center">
                <th>Description</th>
                <th><img src="./img/plus.png" width="20" heigth="20"/></th>
                <th><img src="./img/less.png" width="20" heigth="20"/></th>
                <th class="text-center">Quantity</th>                
            </tr>
            </thead>
            <tbody>
            <tr v-for="(mov,index) in movements">
                <td class="text-left">{{ mov.mov_description }}</td>                
                <td class="text-center"><span v-if="mov.mov_type=='PLUS' ">{{ mov.mov_quantity }} </span></td>
                <td class="text-center"> <span v-if="mov.mov_type=='LESS' ">{{ mov.mov_quantity}} </span></td>
                <td class="text-center">{{ this.$parent.quantity }}</td>                
            </tr>
            </tbody>
        </table>
        </div>
    `,
    data(){        
        return{       
            movements:[
                { mov_id: 1, mov_id_stuff: "Stuff 1", mov_type: "PLUS", mov_description: "lorem ipsu",mov_quantity:12},
                { mov_id: 2, mov_id_stuff: "Stuff 1", mov_type: "LESS", mov_description: "lorem ipsu",mov_quantity:0},
                { mov_id: 3, mov_id_stuff: "Stuff 1", mov_type: "LESS", mov_description: "lorem ipsu",mov_quantity:2},
                { mov_id: 4, mov_id_stuff: "Stuff 1", mov_type: "PLUS", mov_description: "lorem ipsu",mov_quantity:12},
            ]                                         
        }
    },
    methods:{
        loadMovs:function(){
            var dataRen;
            fetch(url)
                .then(response => response.json())
                .then(
                    data => {              
                        this.stuff.splice(0)          
                        for(var i in data){                            
                            this.stuff.push(data[i])
                        }
                    }
                );            
        },
        loadMove:function(id){
            console.log(id)
        },
        deleteStuff:function(stu_id){
                var data = { id: stu_id }
                var request = url+stu_id
                fetch(request, {
                    method: 'DELETE',                                                                        
                })            
                this.stuff.pop()    
            
        }
    },
    mounted(){                
    }
})