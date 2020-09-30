const {check, validationResult} = require('express-validator/check');

class Livro {
    static validacoes() {

        return [
            check('titulo').isLength({ min: 5}).withMessage('o título precisa ter no mínimo 5 caracteres!'),
            check('preco').isCurrency().withMessage('o preço precisa ter valor monetário válido')
        ]
    }
}

module.exports = Livro;