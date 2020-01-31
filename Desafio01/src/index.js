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

app.put('/projects/:id', (req, res)=>{
    const {id} = req.params;
    const {title} = req.body;

    projects.map((project) => {
        if(project.id == id){
            project.title = title;
        }
    });

    return res.json(projects);

});

app.delete('/projects/:id', (req, res) =>{
    const {id} = req.params;
    
    const pos = projects.findIndex(proj => proj.id == id);
    projects.splice(pos, 1);
    return res.status(200).send();
});

app.post('/projects/:id/tasks', (req, res)=>{
    const {id} = req.params;
    const {title} = req.body;
    let project = projects.find(proj => proj.id == id);
    project.tasks.push(title);
    return res.json(projects);
});

app.listen(3000);