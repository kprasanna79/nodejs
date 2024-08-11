const { number } = require('joi');
const mongoose = require('mongoose');

async function connectToDatabase() {
    try{
        await mongoose.connect("mongodb+srv://prasannakumaravel:Dhivya86@oceanofcakes.ntb8j.mongodb.net/?retryWrites=true&w=majority&appName=oceanofcakes&ssl=true");
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error);
    }
}

connectToDatabase();

const cakeSchema = new mongoose.Schema({
    name:String,
    count:Number,
    
})

const Cakecount = mongoose.model('CakeModel', cakeSchema);

const cakecount = new Cakecount( {
    name:'site1',
    count:1,

})

cakecount.save();