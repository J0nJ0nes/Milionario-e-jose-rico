const mongoose =require('mongoose');
require('dotenv').config();

const conectaMOngoDB =async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifieldTopology:true
        });
        console.log('MongoDB conectado com sucesso');
     } catch(error){
        console.error('erro ao conectar com o MongoDb',)
        process.exit(1);
     }
};

module.exports =conectaMOngoDB;