const knex = require('knex')
const path = require('path')
const DB_USER=process.env.DB_USER 
const DB_PASSWORD=process.env.DB_PASSWORD
const DB_NAME=process.env.DB_NAME
const DB_CLUSTER=process.env.DB_CLUSTER

const configMySql = {
    client: 'mysql',
    connection: {
        //host: '192.168.0.11',
        host: 'ha.opvc.cloudns.cc',
        user: 'root',
        password: 'coderhouseroot!.',
        //database: 'backend-desafio16'
        database: 'coderhouse'
    },
    "pool": { "min": 2, "max": 600}
}
const database = knex(configMySql)

const mongodb = {
    connectionString: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    }

module.exports = { database, mongodb }