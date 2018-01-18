const Twit = require('../models/twit');

class TwitAPI {
  static getTwit(req, res){
    Twit.find()
    .populate('posted_by')
    .then((datatwit) => {
      res.status(200).json(datatwit)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  }

  static createTwit(req, res){
    var newtwit = new Twit({
      isi: req.body.isi,
      posted_by: req.decoded.userId
    })
    newtwit.save()
    .then((datatwit) => {
      res.status(200).json({ message: 'Twit Succesfully Added!', datatwit })
    })
    .catch((err) => {
      res.status(500).send(err)
    })
  }

  static getTwitbyId(req, res){
    let id = {questionId:req.params.id}
    Twit.find(id)
    .populate('posted_by')
    .then((datatwit) => {
      res.status(200).json(datatwit)
    })
    .catch((err) => {
      res.status(404).send(err)
    })
  }

  static deleteTwit(req, res){
    Twit.remove({_id : req.params.id})
      .then((result) => {
      res.json({ message: "Twit successfully deleted!", result });
    })
    .catch((err) => {
      res.send(err)
    })
  }


}

module.exports = TwitAPI
