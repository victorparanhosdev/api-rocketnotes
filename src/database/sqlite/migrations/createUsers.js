const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR, 
  email VARCHAR,
  password VARCHAR, 
  avatar VARCHAR, 
  created_at DATE,
  updated_at DATE
)
`

module.exports = createUsers;