
import CrudSchema from '../models/Crud.js'
const postData=async(req, res) => {
    const postCrud=req.body
    const newCrud=await CrudSchema(postCrud)
   try{
      newCrud.save()
    res.status(201).json(newCrud)

   }
   catch(err){
       res.status(400).json(err)
   }
}
export default postData

