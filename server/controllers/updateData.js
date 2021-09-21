import CrudSchema from "../models/Crud.js";
import mongoose from 'mongoose'

const updateData=async(req,res) => {
    
    const {id:_id} = req.params
    const data=req.body
  
    
        if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Data with that ID') 
        const updatedData=await CrudSchema.findByIdAndUpdate(_id,data,{new:true})
        res.status(200).json(updatedData)
        
        
    

}
export default updateData
