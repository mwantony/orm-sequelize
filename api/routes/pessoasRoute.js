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

module.exports = router