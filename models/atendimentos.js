const conexao = require('../infraestrutura/conexao')

class Atendimentos {
    adicionar(atendimento) {
        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimento, (e, res) => {
            if(e){
                console.log(e)
            } else {
                console.log(res)
            }
        })
    }
}

module.exports = new Atendimentos