const mongoose=require('mongoose');
const mongouri='mongodb+srv://GoFood:Ritikgupta%40123@cluster0.jseu5ax.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongouri); 
        console.log("Connected to MongoDB");

        const fetched_data = mongoose.connection.db.collection("food_items");
        const data = await fetched_data.find({}).toArray();
        const foodCategory = mongoose.connection.db.collection("foodCategory");
        const catdata = await foodCategory.find({}).toArray();
        global.food_items = data;
        global.foodCategory = catdata;
       
    } catch (err) {
        console.error(err);
    }
};
module.exports=mongoDB;