import express from "express"
import cors from "cors"
import { createAkun, getAkun, LoginAkun } from "./controller/AdminController.js"
import { createCustomer, deleteCustomer, deleteMany, getCustomer, updateCustomer } from "./controller/CustomerController.js"

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

// admin akun
app.get("/akun",getAkun)
app.post("/akun",createAkun)

// admin Login
app.post("/login",LoginAkun)


// data customer
app.get("/customer",getCustomer)
app.post("/customer",createCustomer)
app.put("/customer/:id",updateCustomer)
app.delete("/customer/:id",deleteCustomer)
app.delete("/del",deleteMany)

app.listen(port, () => {
    console.log(`Server running on http://localhost:3000/`)
})