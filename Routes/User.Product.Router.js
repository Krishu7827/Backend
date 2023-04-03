let express = require("express")
let { productModel } = require("../models/AdminProduct.Model")
let {Userauthentication}= require("../middleware/user.Authentication.middleware")
let UserProductRouter = express.Router()
UserProductRouter.use(express.json())
let {q} = require("q")

UserProductRouter.use(Userauthentication)


UserProductRouter.get("/", async (req,res) => {

   // console.log(req.query)
    
        try {
    
            let product = await productModel.find(req.query)
    
            res.send(product)
    
        } catch (err) {
    
            res.send({ "msg": "error" })
    
    
        }
    
    
    })


module.exports = { UserProductRouter }


