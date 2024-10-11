import express from 'express'

const app = express()


const port = 3000

// app.get("/", ( req,res) =>{
//     res.send("Hello From Nikhil Chavan")
// })

// app.get("/ice-tea", ( req,res) =>{
//     res.send("What Do ypu want From Mr Chavan?")
// })


// // This is how we handle diffrent request from users
// // using express 
// app.get("/Xiomi", ( req,res) =>{
//     res.send("Introdcuing Poco X5 5g")
// })

app.use(express.json())

let teaData = []
let nextId = 1

app.post('/teas',(req,res)=>{
    const {name, price} = req.body
     const newTea = {id:nextId++,name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
     })

app.get('/teas',(req,res) =>{
    res.status(200).send(teaData)


})

app.get('/teas/:id', (req,res)  =>{
    const tea = teaData.find( t => t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send("Tea Not found")
    }
    res.status(200).send(tea)
})


app.put('/teas/:id',(req,res) =>{
    const tea = teaData.findData.find(t => t.id === parseInt (req.params.id))

    if(!tea){
        return res.status(404).send('Tea Not found')
    }

    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})


//delete tea

app.delete('/teas/:id',(req,res) =>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))

    if(!tea){
        return res.status(404).send("Tea Not found")
    }

    const index = teaData.indexOf(tea)
    teaData.splice(index,1)
    res.status(200).send(
        'deleted'
    )
})

app.listen (port, () => {
    console.log(`Server is running on port ${port}...`)
}) 