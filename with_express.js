const express = require('express'); 

//initialization
const app = express();
// application will now use json format for data
app.use(express.json());


const port = 3000; 

const todolist = ["complete node","play cricket"];

app.get("/todos",(req,res) =>{
    //callback
    res.status(200).send(todolist);
});

app.post('/todos',(req,res) => {
    let newtodo = req.body.item;
    todolist.push(newtodo);
    res.status(201).send({
        message : "task added successfully",
    });
});
app.delete('/todos',(req,res) => {
    const delitem = req.body.item;
    todolist.find((element ,index) => {
        if(element === delitem){
            todolist.splice(index,1);
        }
    });
    res.status(202).send({
        message : `del item - ${req.body.item}`,
    });
});
// all the other methods on particular route
app.all('/todos',(req,res) =>{
    res.status(501).send();
});
//all the other routes
app.all('*',(req,res) => {
    res.status(404).send();
});

app.listen(port,() =>{
    console.log(`node js server started on port ${port}`);
});
// http://localhost:8081/todos