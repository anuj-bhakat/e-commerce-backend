
const buyService = async (productId, userId)=>{
    try{
        console.log(`Buying Product with id ${productId} for user : ${userId}`);
    }catch(error){
        console.log("Error in Buying Product: ",error);
    }
}


module.exports=buyService;