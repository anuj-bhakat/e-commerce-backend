const buyService=require('../services/buyProductService');

const buyProduct= async (req,res)=>{
    try{
        const productId=req.params.id;
        buyService(productId);

    }catch(error){
        console.error('Error in buyProduct:',error);
        res.status(500).json({message:'Internal Server Error'});
    }
}



module.exports=buyProduct;