import mongoose from 'mongoose';
const schema= mongoose.Schema({
topic:String,
userName:String,
title:String,
time:String,
image:String,
replies:Number,
retuits:Number,
handle:String,
tuit:String,
likes:Number,
liked:Boolean,
},{collection:'tuits'});
export default schema;


