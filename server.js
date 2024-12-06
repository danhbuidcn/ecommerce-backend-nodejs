const app = require("./src/app")

const PORT = 3055

const server = app.listen(3055, () =>{
  console.log(`start with port ${PORT}`)
})

process.on('SIGNINT', () => {
  server.close(() => console.log(`Exit server express`))
})
