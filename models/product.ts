import mongoose from 'mongoose';

const schema = mongoose.Schema;

const product = new schema({
        picture : {
            type: String,
            required:true
        },
        name : {
            type : String,
            required : true
        },
        price : {
            type : String,
            required : true
        },
        category : {
            type : Array,
            required : true
        },
        restaurantId : {
            type : schema.Types.ObjectId,
            ref : 'restaurant'
        }
})


export default  mongoose.model('product',product);