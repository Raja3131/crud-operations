
import CrudSchema from '../models/Crud.js'
const getData=async(req, res) => {
   try{
       const getCrud=await CrudSchema.find()
       res.status(200).json(getCrud)
   }
   catch(err){
       res.status(400).json(err)
   }
}
export default getData

