const createUsers = `
CREATE TABLE cadastro (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR, 
  email VARCHAR, 
  password VARCHAR, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`

module.exports = createUsers;