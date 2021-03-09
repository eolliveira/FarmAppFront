const { Router } = require('express');
const router = Router();

const notas = [
    {id: 1, userId: 1, Titulo: 'Titulo 1', descrição: 'Descrição 1', criadoEm: '01/01/2019', alteradoEm: '01/01/2019'},
    {id: 2,userId: 2, Titulo: 'Titulo 2', descrição: 'Descrição 2', criadoEm: '01/01/2019', alteradoEm: '01/01/2019'},
    {id: 3,userId: 1, Titulo: 'Titulo 3', descrição: 'Descrição 3', criadoEm: '01/01/2019', alteradoEm: '01/01/2019'},
]


router.get('/:id?', (req, res) => {
    if(req.params.id){
        const result = notas.find((nota) => req.params.id == nota.id);
        res.json(result);
    }else{
        res.json(notas);
    }
});


router.post('/', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});


router.put('/:id', (req, res) => {
    console.log(req.body);
    res.send(`Nota com id:${req.params.id} foi alterada com sucesso!`);
});


router.delete('/:id', (req, res) => {
    res.send(`Nota id:${req.params.id} foi removida com sucesso`);
});


module.exports = router;