const mysql =require('mysql')

function connect()
{
    const connection =mysql.createConnection({
        host:'172.18.5.182',
        user:'root',
        password:'root',
        database:'myapp_db',
        port:9000
    })
connection.connect()
return connection

}
module.exports = {
    connect:connect
}