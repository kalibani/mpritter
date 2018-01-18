const User = require('../models/users')
const jwt = require('jsonwebtoken')

class UserCtrl {

  static register(req, res){
    var newUser = new User(req.body)
    newUser.save().then((dataUser) => {
      res.status(200).json({ message: 'Register Success!', dataUser })
    })
    .catch((err) => {
      res.status(404).send(err)
    })

  }

  static login(req, res){
    User.findOne({$or: [
      {email: req.body.email},
      {username: req.body.username}
    ]})
    .then((dataUser)=>{
      if(!dataUser){
        res.json({message: 'Unregistered Username, Please Register First!'})
      }else {
        dataUser.comparePassword(req.body.password, (err, success) => {
          if (err || !success) {
            console.log(err)
            return res.status(200).json({
              message: 'Authentication failed, Username or password did not match'
            })
          }else {
            let payload = {
              userId: dataUser._id,
              email: dataUser.email,
              username: dataUser.username,
              fullname: dataUser.fullname
            }
            let token = jwt.sign(payload, process.env.SECRET)
            res.status(200).json({
              message:"Login Succes!",
              token: token
            })
          }
        })
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  static getProfile(req, res){
    res.json(req.decoded)
  }

  static updateProfile(req, res) {
    if(req.file && req.body.password!==''){
      req.body.image = req.file.cloudStoragePublicUrl
      User.findById(req.params.id).then((data) => {
        return Object.assign(data, req.body)
      }).then((datanew) => {
        console.log(datanew);
        return datanew.save()
      }).then((updatedUser) => {
        res.json({message: 'Update Succes!', data: updatedUser})
      }).catch((err) => {
        res.send(err);
      })
    } else if (req.file && req.body.password=='') {
      req.body.image = req.file.cloudStoragePublicUrl
      let id = {_id : req.params.id}
      let update = {
        email: req.body.email,
        username: req.body.username,
        image: req.body.image,
        fullname: req.body.fullname
      }
      User.findByIdAndUpdate(id, update,{
        new: true, // return new updated document
      })
      .then(updatedUser => {
        res.status(200).json({
          message: 'Update Succes!',
          updatedUser: updatedUser
        })
      })
      .catch(err => res.send(err))
    } else {
      let id = {_id : req.params.id}
      let update = {
        email: req.body.email,
        username: req.body.username,
        fullname: req.body.fullname
      }
      User.findByIdAndUpdate(id, update,{
        new: true, // return new updated document
      })
      .then(updatedUser => {
        res.status(200).json({
          message: 'Update Succes!',
          updatedUser: updatedUser
        })
      })
      .catch(err => res.send(err))
    }
  }

}

module.exports = UserCtrl
