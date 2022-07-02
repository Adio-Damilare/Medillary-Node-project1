const express=require("express")
const router= express.Router()
const controller= require("../Controller/Goods")
router.get("/product",controller.showGood)

module.exports=router