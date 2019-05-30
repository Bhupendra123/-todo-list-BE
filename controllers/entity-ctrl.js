const mongoose = require('mongoose');
const Entity = require('../models/entity-mdl');

module.exports = {
  insertEntity: (req, res) => {
    const entityData = new Entity({
      title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      status: req.body.status ? req.body.status : false
    });
    entityData.save()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getEntityById: (req, res) => {
    Entity.findById({ _id: req.body._id })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  updateEntity: (req, res) => {
    Entity.updateFields(req.body._id, req.body)
      .then((result) => {
        res.send(JSON.stringify(result));
      })
      .catch((err) => {
        res.send(err);
      });
  },
  deleteEntity: (req, res) => {
    Entity.findByIdAndRemove(req.body._id)
      .then((result) => {
        res.send(JSON.stringify(result));
      })
      .catch((err) => {
        res.send(err);
      });
  },
  getAllEntities: (req, res) => {
    Entity.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  },
  deleteMultipleEntities: (req, res) => {
    let entityIDs = [];
    req.body.forEach(function(obj){     //req.body => [{'_id' : ".." , "name" : "john"}]
        entityIDs.push(obj._id);
    });
    Entity.remove({'_id': { '$in': entityIDs }})
      .then((result) => {
        res.send(JSON.stringify(result));
      })
      .catch((err) => {
        res.send(err);
      });
  }
};
