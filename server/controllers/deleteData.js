import CrudSchema from "../models/Crud.js";
import mongoose from 'mongoose'

const deleteData=async(req,res) => {
    
    const {id:_id} = req.params
    const data=req.body
  
    
        if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('No Data with that ID') 
        const deletedData=await CrudSchema.findByIdAndDelete(_id,)
        res.status(200).send('Successfully deleted')
        
        
    

}
export default deleteData
