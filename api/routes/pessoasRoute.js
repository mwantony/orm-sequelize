const {Router} = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', (req, res) => {
  PessoaController.pegaTodasAsPessoas(req, res)
})

router.get('/pessoas/:id', (req, res) => {
  PessoaController.pegaUmaPessoa(req, res)
})

router.post('/pessoas', (req, res) => {
  PessoaController.criaPessoa(req, res)
})

router.put('/pessoas/:id', (req, res) => {
  PessoaController.atualizaPessoa(req, res)
})

router.delete('/pessoas/:id', (req, res) => {
  PessoaController.apagaPessoa(req, res)
})

module.exports = router