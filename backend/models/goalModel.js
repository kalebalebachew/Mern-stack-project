const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    text:{
        type: String,
        required: [ true ,"please add text value"]
    }
}

)

module.exports = mongoose.model('Goal', goalSchema)