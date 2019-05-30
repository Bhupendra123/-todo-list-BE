const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entities = new Schema({
  title: String,
  description:String,
  time: Date,
  status: { type: Boolean, default: false}
}, { timestamps: true });

entities.static({
  updateFields(id, data) {
    return this.update({
      _id: id,
    }, {
      $set: data,
    });
  }
});
const Entity = mongoose.model('entities', entities);

module.exports = Entity;
