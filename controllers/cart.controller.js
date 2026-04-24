const cartService = require("../services/cart.service");



//Add to cart
module.exports.AddTocart=async(req,res)=>{

    try {
        const userId = req.user.id;
        const {item}=req.body;
        const cart = await cartService.addToCart({userId,item});

        return res.status(200).json({message:"add item to cart successfully",cart});
        
    } catch (error) {
        return res.status(400).json({message:error.message});
        
    }
};


//Get cart
module.exports.GetCart = async (req,res)=>{
    try {
        const userId = req.user.id;

        let cart = await cartService.GetCart(userId);

        if(!cart){
            return res.status(400).json({message:"cart Not Found"})
        }
        return res.status(200).json({message:"Cart Data Fetch Successfully",cart})
        
    } catch (error) {
        return res.status(400).json({message:error.message})
        
    }
}


// Remove single item from  cart
module.exports.RemoveItem = async (req , res) => {
    try {
        const userId = req.user.id;
        const  productId = req.params.id;
        let cart = await cartService.RemoveSingleProduct({userId , productId});
        return res.status(200).json({message: "Remove Items From Cart Successfully"});
        
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}