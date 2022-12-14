const express = require('express')
const app = express() //Wherever you see 'app', you'll know you're using Express
const cors = require('cors')
const PORT = 8000

app.use(cors())
app.use(express.static('public'))

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
        },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    //__dirname means wherever the file we're running is located, that's where we start looking for our subsequent files. 
})

app.get('/api/:rapperName', (request, response) => {
    //:rapperName tells Express this is going to be a query parameter that's going to be on the URL
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
    //[] Bracket Notation allows you to deal with spaces in the name
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['unknown'])
    }
    // response.json(rappers)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})