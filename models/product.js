const mongoose=require("mongoose");

const {Schema, types}=mongoose;

const ImageSchema=new Schema(
    {
        url: {type:String, required: true},
        alt: {type: String, default: ""},
        isPrimary: {type: Boolean, default: false},
    },
    {_id:false}
);

const AttributeSchema =new Schema(
    {
        name: {type: String, required:true, trim:true},
        value: {type: String, required:true, trim: true},
        price: {type: Number, default: 0},
    },
    {_id:false}
);