const mongoose = require('mongoose');

const DB = 'mongodb+srv://vamsee:cellix@testing.nox0miq.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('DB is Successfully Connected');
}).catch((err) => console.log('No Connection'))
