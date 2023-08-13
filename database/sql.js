const mongoose = require('mongoose')
mongoose.set('strictQuery',false)

mongoose.connect('mongodb+srv://moiz78987:Moizarif1234@cluster0.n4jmtig.mongodb.net/',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
var db = mongoose.connection;
db.on('error', ()=>console.log('error'))
db.once('open', ()=>console.log('MongoDB Connected'))

module.exports={db};





// mongoose.connect('mongodb+srv://moiz78987:Moizarif1234@cluster0.n4jmtig.mongodb.net/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('MongoDB Connected');
// })
// .catch((error) => {
//     console.error('MongoDB Connection Error:', error);
// });
