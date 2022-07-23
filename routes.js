const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM recetas', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO recetas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('receta added!')
        })
    })
})

//get by id


routes.get('/:id_paciente', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM recetas WHERE id_paciente = ?',(req.body,req.params.id_paciente), (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})





module.exports = routes