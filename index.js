import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './config/routes.js'

const app = express()
const corsOption={
    origin:'*'//'localhost:3000'
}

//Configuracion del Middleword
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api',cors(corsOption),routes) 

app.get('/',(req,res)=>res.send('Bienvenidos a mi API'))

const server = app.listen(process.env.POST || 8000,()=>{
    console.log(`Servidor corriendo : ${server.address().port}`)
})

export default app 