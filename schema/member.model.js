const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema ({
    mb_nick: {
        type: String,
        required: true,
        index: {unique: true, sparse: true}
    },
    mb_phone: {
        type: String,
        required: true
    },
    mb_password: {
        type: String,
        required: true,
        select: false
    },
    mb_type: {
        type: String,
        required: false,
        default: "USER",
        enum: {
            values: ["USER","ADMIN","PEDAL","RESTAURANT"],
            message: `{VALUE} is not among permitted values` 
        }
    },
    mb_status: {
        type: String,
        required: false,
        default: "ACTIVE",
        enum: {
            values: ["ONPAUSE","ACTIVE","DELETED"],
            message: `{VALUE} is not among permitted values` 
        }
    },
    mb_full_name: {
        type: String,
        required: false
    },
    mb_address: {
        type: String,
        required: false
    },
    mb_image: {
        type: String,
        required: false
    },
    mb_point: {
        type: Number,
        required: false,
        default: 0
    }

});

module.exports = mongoose.model("Member",memberSchema);
