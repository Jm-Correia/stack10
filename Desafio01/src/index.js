const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (req, res)=>{
    return res.json(projects);
});

app.post('/projects', (req, res)=>{
    const {id, title} = req.body;
    
    let project = {
        "id": id,
        "title": title,
        "tasks": []
    }
    
    projects.push(project);

    return res.json(projects);
});

app.put('/projetcs/:id', (req, res)=>{

});

app.delete('/projects/:id', (req, res) =>{

});

app.get('/projects/:id/tasks', (req, res)=>{

});

app.listen(3000);