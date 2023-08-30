import Order from "../models/Order.js";

export const placeOrder = async (req,res)=>{
    try{
    const {user,items,totalPrice} = req.body;

    const newOrder = new Order({
        user,
        items,
        totalPrice,
    })

    await newOrder.save();

    res.status(201).json({message: 'Order placed successfully'})
} catch (error) {
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const getUserOrders = async (req,res)=>{
    try{
        const userId = req.query.userid; //for testing manually set this

        const userOrders = await Order.find({user:userId})

        res.json(userOrders)
    }
    catch (error) {
        console.error('Error fetching orders of this user:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}