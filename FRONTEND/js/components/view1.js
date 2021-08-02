app.component('app-view1',{
    template:`
        <div class="row">            
            <span class="mt-2 mb-5 h3">Stuff</span>
            <app-view1-form v-if="!isEdit"></app-view1-form>            
            <app-view1-search v-if="!isEdit"></app-view1-search>            
            <app-view1-grid v-if="!isEdit"></app-view1-grid>
            <app-view1-edit-form v-if="isEdit"></app-view1-edit-form>      
        </div>
    `,
    data(){
        return{
            isEdit:false
        }
    },
    methods:{        
        loadEdit:function(id){
            console.log(id)
            this.isEdit=true
        },
        exitEdit:function(){
            this.isEdit = false
        }
    }
})

app.component('app-view1-form',{
    template:
        /*html*/`
        <form class="row">
            <div class="form-group col-1" >
                <label for="id">id:</label>
                <input type="id" class="form-control" id="id" name="id">
            </div>
            <div class="form-group col-6" >
                <label for="pwd">Name:</label>
                <input v-model="stuff.name" type="text" class="form-control" id="name" name="name">
            </div>
            <div class="form-group col-3">
                <label for="sel1">State</label>
                <select v-model="stuff.state" class="form-control" id="state">
                    <option value="NEW">NEW</option>
                    <option value="USED">USED</option>
                    <option value="BROKEN">BROKEN</option>
                </select>
            </div>
            <div class="col-2">
                <button @click="insertStuff" type="button" class="mt-4 btn btn-primary">Save</button>
            </div>
        </form>
    `,
    data(){
        return{
            stuff:[
                { name:'',state:'',quantity:'0'}
            ]
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

app.component('app-view1-search',{
    template:
        /*html*/`
        <form class="row mt-5">
            <div class="form-group col-2" >
                <label for="id">Search by name</label>
                <input type="id" class="form-control" id="id" name="id">
            </div>
            <div class="form-group col-10" >
            </div>
        </form>
        `,
})

app.component('app-view1-grid',{
    template:
        /*html*/`
        <div class="mt-5">        
        <table class="table table-bordered table-hover">
            <thead>
            <tr class="bg-dark text-white">
                <th>Name</th>
                <th class="text-center">Quantity</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(stu,index) in stuff">
                <td class="text-left">{{ stu.stu_name }}</td>
                <td class="text-center">{{ stu.stu_quantity }}</td>
                <td class="text-center">
                    <img v-if="stu.stu_state =='NEW'" src="./img/new.jpg" width="50" heigth="50"/>
                    <img v-if="stu.stu_state =='USED'" src="./img/used.png" width="50" heigth="50"/>
                    <img v-if="stu.stu_state =='BROKEN'" src="./img/broken.jpg" width="50" heigth="50"/>
                </td>
                <td class="text-center"><a @click="loadMove(stu.stu_id)" class="btn btnmuted"><img src="./img/chart.jpg" width="30" heigth="30" /></a></td>
                <td class="text-center"><a @click="deleteStuff(stu.stu_id)" class="btn btnmuted"><img src="./img/delete.jpg" width="30" heigth="30"/></a></td>
                <td class="text-center"><a @click="this.$parent.loadEdit(stu.stu_id)" class="btn btnmuted">select</a></td>
            </tr>
            </tbody>
        </table>
        </div>        
    `,
    data(){        
        return{       
            stuff:[
                { stu_id: 1, stu_name: "Stuff 1", stu_state: "NEW", stu_quantity: 12}
            ]                                         
        }
    },
    methods:{
        loadStuff:function(){
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
            this.$root.viewMov()
        },
        deleteStuff:function(stu_id){
                var data = { id: stu_id }
                var request = url+stu_id
                fetch(request, {
                    method: 'DELETE',                                                                        
                })            
                this.stuff.pop()    
            
        },
    },
    mounted(){        
        this.loadStuff()
    }
})


app.component('app-view1-edit-form',{
    template:
        /*html*/`
        <div class="contaiter">        
            <div class="row">
            <form class="row">
                <div class="form-group col-1" >
                    <label for="id">id:</label>
                    <input type="id" class="form-control" id="id" name="id">
                </div>
                <div class="form-group col-6" >
                    <label for="pwd">Name:</label>
                    <input v-model="stuff.name" type="text" class="form-control" id="name" name="name">
                </div>
                <div class="form-group col-3">
                    <label for="sel1">State</label>
                    <select v-model="stuff.state" class="form-control" id="state">
                        <option value="NEW">NEW</option>
                        <option value="USED">USED</option>
                        <option value="BROKEN">BROKEN</option>
                    </select>
                </div>
                <div class="col-2">
                    <button @click="insertStuff" type="button" class="mt-4 btn btn-primary">Save</button>
                </div>
            </form>
            </div>
            <span @click="this.$parent.exitEdit" class="mt-5 btn btn-info text-white">Volver</span>
        </div>
    `,
    data(){        
        return{       
            stuff:[
                { stu_id: 1, stu_name: "Stuff 1", stu_state: "NEW", stu_quantity: 12}
            ]                                         
        }
    },
    methods:{
        loadStuffEdit:function(id){
            var dataRen;
            var request = url + id
            fetch(request)
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
    },
    mounted(){        
        
    }
})