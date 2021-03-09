const { Router } = require('express');
const router = Router();

const checkList = [
    {id: 1, notaId: 2, descricao: 'Descrição 1', concluida: 0},
    {id: 2, notaId: 1, descricao: 'Descrição 2', concluida: 1},
    {id: 3, notaId: 2, descricao: 'Descrição 3', concluida: 1},
]


router.get('/:id?', (req, res) => {
    if(req.params.id){
        const result = checkList.find((c) => req.params.id == c.id);
        res.json(result);
    }else{
        res.json(checkList);
    }
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});


router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`checkList id:${req.params.id} foi alterado com sucesso!`);
});


router.delete('/:id', (req, res) => {
    res.send(`checkList id:${req.params.id} foi removido com sucesso`);
});


module.exports = router;