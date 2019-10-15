
const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(cors())

app.use(bodyParser.json())
app.use(express.static('build'))

morgan.token('data', (request, body) => {
    return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

let persons = [
    {
        name: 'Arto Hellas',
        number: '040-123456',
        id: 1
    },
    {
        name: 'Ada Lovelace',
        number: '040-567456',
        id: 2
    }, {
        name: 'Dan Abramov',
        number: '040-1324098456',
        id: 3
    }, {
        name: 'Mary Poppendieck',
        number: '040-123092380',
        id: 4
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World! </h1>')
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const generateId = () => {
    const randomId = Math.floor(Math.random() * Math.floor(123456))
    return randomId
}

app.post('/persons/', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'persons name or number missing'
        })
    }

    const henkilot = persons.map(p => p.name)

    if (henkilot.includes(body.name)) {

        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)

})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (req, res) => {
    res.send('<div>Phonebook has info for ' + persons.length + ' people</div> <br>' + new Date())
})

const port = process.env.PORT || 3001
app.listen(port)
console.log(`Server running on port ${port}`)
