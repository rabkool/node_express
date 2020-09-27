// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/admin', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('db ok')
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    age: Number,
    sex: { type: Number, default: 0 }
});

const User = mongoose.model('user', userSchema);

// // insert
User.insertMany({
    name: 'rabkool',
    password: 'rabkool',
    age: 20,
    sex: 1
}).then((data) => {
    console.log(data)
    console.log('insert ok')
}).catch((err) => {
    console.log('insert failure')
})

// find
User.find().then((data) => {
    console.log(data)
    console.log('find ok')
}).catch((err) => {
    console.log('find failure')
})

// remove
User.remove().then((data) => {
    console.log(data)
    console.log('remove ok')
}).catch((err) => {
    console.log('remove failure')
})

// updata
User.updata().then((data) => {
    console.log(data)
    console.log('remove ok')
}).catch((err) => {
    console.log('remove failure')
})