import Item from "../models/Item.js";
import Category from "../models/Category.js";

export const getAllItems = async (req,res)=>{
    try{
        const items = await Item.find();

        res.json(items); //array of items returned
    }
    catch(error)
    {
        console.error("Error fetching items from database: ",error)
        res.status(500).json({error:"Internal server error"})
    }
}

export const getItemsbyCategory = async (req,res)=>{
    try{
        const {category} = req.params;
        const foundCategory = await Category.findOne({_id:category})

        if(!foundCategory)
        {
            return res.status(404).json({error: 'Category not found'})
        }
        const itemIds = foundCategory.items;
        console.log(itemIds)

        const categoryItems = await Item.find({ _id: { $in: itemIds } });
        res.json(categoryItems);
    }
    catch(error)
    {
        console.error("Error fetching items of category from database: ",error)
        res.status(500).json({error:"Internal server error"})
    }
}

export const getItem = async (req,res)=>{
    try {
        const itemId = req.params.itemId;
    
        const retrievedItem = await Item.findOne({
            _id:itemId
        })
        if (!retrievedItem) {
          return res.status(404).json({ error: "Item not found" });
        }
        res.json(retrievedItem); //sending back the retrieved item
      } catch (error) {
        console.error("Error getting item:", error);
        res.status(500).json({ error: "Internal server error" });
      }
}

export const getAllCategories = async (req,res)=>{
    try{
        const categories = await Category.find();

        res.json(categories); //array of categories returned
    }
    catch (error) {
        console.error("Error fetching all categories:", error);
        res.status(500).json({ error: "Internal server error" });
      }
}

//similiar funcs for other item related operations