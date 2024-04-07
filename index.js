import express from "express"
import cors from "cors"
import { createAkun, getAkun, LoginAkun } from "./controller/AdminController.js"
import { createCustomer, deleteCustomer, getCustomer, updateCustomer } from "./controller/CustomerController.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// admin akun
app.get("/",getAkun)
app.post("/",createAkun)
app.post("/login",LoginAkun)



// data customer
app.get("/customer",getCustomer)
app.post("/customer",createCustomer)
app.put("/customer/:id",updateCustomer)
app.delete("/customer/:id",deleteCustomer)

app.listen(port, () => {
    console.log(`Server running on http://localhost:3000/`)
})