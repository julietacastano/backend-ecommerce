import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = new mongoose.Schema({
    titulo:{type: String, require:true, trim:true},
    descripcion:{type: String, require:true},
    precio: {type:Number, require:true},
    codigo:{type:String, require:true},
    stock:{type:Number, require: true},
    status:{type:Boolean},
    categoria:{type:String, require:true},
    img:{type:String}
})
productSchema.plugin(mongoosePaginate)

export default productSchema