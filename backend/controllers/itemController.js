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
        const foundCategory = Category.findOne({name:category})

        if(!foundCategory)
        {
            return res.status(404).json({error: 'Category not found'})
        }

        const categoryItems = Item.find({categories:foundCategory._id});
        res.json(categoryItems);
    }
    catch(error)
    {
        console.error("Error fetching items of category from database: ",error)
        res.status(500).json({error:"Internal server error"})
    }
}

//similiar funcs for other item related operations