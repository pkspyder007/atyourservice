const User = require('../models/user');
const Gig = require('../models/postGig');

exports.add = (req, res) => {
  Gig.create(req.body)
    .then(gig => {
      console.log(gig)
      res.json({ success: true })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
}

exports.getAll = (req, res) => {
  Gig.find({})
    .then(gigs => {
      res.json({ success: true, gigs })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
}

exports.getOne = (req, res) => {
  Gig.findById(req.body.gigID)
    .then(gig => {
      res.json({ success: true, gig })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false })
    })
}