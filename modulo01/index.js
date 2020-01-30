const express = require('express');

const app = express();
app.use(express.json());

/**
 * Middlewares GLOBAL
 * ################## EXEMPLO ###########################
*/
app.use((req, res, next)=>{
    console.log(`Método ${req.method}, URL ${req.url}`);
    return next();
});
/**
 * Midlewares LOCAL
 * ################## EXEMPLO ###########################
 */
function checkUserExists(req, res, next){
    if(!req.body.name){
        return res.status(400).json({err: 'User name is required'});
    }
    return next();
}

function checkUserArray(req, res, next){
    if(!users[req.params.id]){
        return res.status(400).json({err: 'User doesn\'t exists'});
    }
    return next();
}

/**
 * Querys params = ?teste=1
 * Router params = /users/1
 * Request body = {"name": "Joao", "email": "1234565@gmail.com"} 
 */

const users = ['01','02','aspira', 'supremo', 'teste'];

app.get('/users', (req, res)=>{
    return res.json(users);
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    return res.status(200).send(`Buscando o usuario ${users[id]}`);
});

app.post('/users', checkUserExists, (req, res)=>{
    const { name } = req.body;
    
    users.push(name);
    return res.json(users);
});

app.put('/users/:id', checkUserExists, (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    users[id] = name;
    return res.json(users);
});

app.delete('/users/:id', checkUserArray, (req, res)=>{
    const {id} = req.params;
    users.splice(id,1);
    return res.send();
});

app.listen(3000);
