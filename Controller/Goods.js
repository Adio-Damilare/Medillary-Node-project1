

const showGood=(req,res)=>{
  
            res.send({ Items:[
                {name:"Phone", qty:20, price:"20,000", isAvailable: true},
                {name:"Battery", qty:10, price:"20,000", isAvailable: true},
                {name:"Charger", qty:50, price:"20,000", isAvailable: true}
            ],status:true})
       
}
module.exports={showGood}