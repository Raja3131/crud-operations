import mongoose from 'mongoose'

const crudSchema=mongoose.Schema(
    {
        name: String,
        date: String,
        profession: String,
        gender: String,
    }
)


const CrudSchema = mongoose.model('CrudSchema',crudSchema)
export default CrudSchema


