import Item from "../models/Item.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";
import mongoose from "mongoose";

export const createItem = async (req, res) => {
  try {
    const { title, description, price } = req.body; //image url param left
    const newItem = new Item({
      title,
      description,
      price,
    });
    await newItem.save();

    res.status(201).json(newItem); // Responding with the created item
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const { title, description, price } = req.body;

    const updatedItem = await Item.findByIdAndUpdate(
      itemId,
      { title, description, price },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(updatedItem); //sending back the updated item
  } catch (error) {
    console.error("Error updating item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({
      name,
    });
    await newCategory.save();

    res.status(201).json(newCategory); // Responding with the created category
  } catch (error) {
    console.error("Error creating category:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const retireItem = async (req,res)=>{
    try{
        const itemId = req.params.itemId;

        const updatedItem = await Item.findByIdAndUpdate(
            itemId,
            {retired:true},
            {new:true}
        )
        if (!updatedItem) {
            return res.status(404).json({ error: "Item not found" });
          }
        res.json(updatedItem); //sending back the updated item or send back success
    }
    catch (error) {
        console.error("Error retiring an item:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getAllOrders = async (req,res)=>{
    try{
        const orders = await Order.find();
        res.json(orders); //array of orders returned
    }
    catch(error)
    {
        console.error("Error fetching orders from database: ",error)
        res.status(500).json({error:"Internal server error"})
    }
}

export const getOrder = async (req,res)=>{
    try {
        const orderId = req.params.orderId;
    
        const retrievedOrder = await Order.findOne({
            _id:orderId
        })
        if (!retrievedOrder) {
          return res.status(404).json({ error: "Order not found" });
        }
        res.json(retrievedOrder); //sending back the retrieved Order
      } catch (error) {
        console.error("Error getting order:", error);
        res.status(500).json({ error: "Internal server error" });
      }
}

export const changeOrderStatus = async (req,res)=>{
    try{
        const orderId = req.params.orderId;
        const newStatus = req.params.status;

        if (!['paid', 'cancelled', 'completed'].includes(newStatus)) {
            return res.status(404).json({ error: "wrong status" });
        }

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            {status:newStatus},
            {new:true}
        )
        if (!updatedOrder) {
            return res.status(404).json({ error: "Order not found" });
          }
        res.json(updatedOrder); //sending back the updated Order or send back success
    }
    catch (error) {
        console.error("Error changing status of the Order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const assignRemoveItemsFromCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const itemId = new mongoose.Types.ObjectId(req.params.itemId);
        const {action} = req.body; // 'add' or 'remove'

        const category = await Category.findById(categoryId);

        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }

        const itemIndex = category.items.findIndex((item) => item === itemId);

        if (action === 'add') {
            if (itemIndex === -1) {
                category.items.push(itemId);
            }
        } else if (action === 'remove') {
            if (itemIndex !== -1) {
                category.items.splice(itemIndex, 1);
            }
        } else {
            return res.status(400).json({ error: "Invalid action" });
        }

        const updatedCategory = await category.save();
        res.json(updatedCategory); // Sending back the updated category

    } catch (error) {
        console.error("Error assigning/removing items from category:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};