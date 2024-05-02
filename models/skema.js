const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Schema1 = new schema({
    data1: { type: String, required: false },
    data2: { type: String, required: false },
    data3: { type: String, required: false },
    data4: { type: String, required: false },
    data5: { type: String, required: false },
});

const Schema2 = new schema({
    data1: { type: String, required: false },
    data2: { type: String, required: false },
    data3: { type: String, required: false },
    data4: { type: String, required: false },
    data5: { type: String, required: false },
});

const Schema3 = new schema({
    data1: { type: String, required: false },
    data2: { type: String, required: false },
    data3: { type: String, required: false },
    data4: { type: String, required: false },
    data5: { type: String, required: false },
});

const Schema4 = new schema({
    data1: { type: String, required: false },
    data2: { type: String, required: false },
    data3: { type: String, required: false },
    data4: { type: String, required: false },
    data5: { type: String, required: false },
});


const Schema5 = new schema({
    data1: { type: String, required: false },
    data2: { type: String, required: false },
    data3: { type: String, required: false },
    data4: { type: String, required: false },
    data5: { type: String, required: false },
});

const schema1 = mongoose.model('schema1', Schema1);
const schema2 = mongoose.model('schema1', Schema1);
const schema3 = mongoose.model('schema1', Schema1);
const schema4 = mongoose.model('schema1', Schema1);
const schema5 = mongoose.model('schema1', Schema1);

module.exports = schema1;
module.exports = schema2;
module.exports = schema3;
module.exports = schema4;
module.exports = schema5;