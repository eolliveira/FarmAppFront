const { Router } = require('express');
const router = Router();

const tag = [
    {id: 1, notaId: 1, nome: 'Nota 1'},
    {id: 2, notaId: 1, nome: 'Nota 2'},
    {id: 3, notaId: 3, nome: 'Nota 1'},
]


router.get('/:id?', (req, res) => {
    if(req.params.id){
        const result = tag.find((t) => req.params.id == t.id);
        res.json(result);
    }else{
        res.json(tag);
    }
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});


router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`Tag com id:${req.params.id} foi alterada com sucesso!`);
});


router.delete('/:id', (req, res) => {
    res.send(`Tag id:${req.params.id} foi removida com sucesso`);
});


module.exports = router;