const mongoose = require('mongoose')

const tutorialSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
	published:{
        type:Boolean,
        default:false
    }
}, { timestamps: true })


module.exports = mongoose.model('Tutorial',tutorialSchema)