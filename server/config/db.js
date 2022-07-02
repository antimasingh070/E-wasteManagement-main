const mongoose = require ('mongoose')

const connect = () => {
    return mongoose.connect('mongodb+srv://antima:delta#07@cluster0.h2lop.mongodb.net/ewaste?retryWrites=true&w=majority')
}
module.exports = connect;