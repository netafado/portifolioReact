const API_URL =  process.env.API_URL ||  'http://api.isaiasfrancisco.com.br' // 'http://localhost:3001'  
const DOMAIN = process.env.DOMAIL ||  'http://api.isaiasfrancisco.com.br' // 'http://localhost:3001' 

console.log(`${API_URL} and ${DOMAIN}`)
export default {
    API_URL,
    DOMAIN
}