const API_URL =  process.env.API_URL ||  'http://localhost:3001' //'https://api.isaiasfrancisco.com.br' 
const DOMAIN = process.env.DOMAIL || 'http://localhost:3001' //'http://api.isaiasfrancisco.com.br'
console.log(`${API_URL} and ${DOMAIN}`)
export default {
    API_URL,
    DOMAIN
}