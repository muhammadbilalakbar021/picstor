var express = require('express');
var router = express.Router();
const UserModel = require("../../../../models/user/UserModel");

/* GET users listing. */
router.post('/getUser', async(req, res)=> {
  try {
    const user = await UserModel.getUserByFieldPassword(req.body)
    console.log(req.body)
    res.status(200).send(user)
  } catch (err) {
    console.log(err)
    res.status(400).send({Error: err, status:400})
  }
});

router.post('/addUser', async (req, res)=>{
  try {
    let  user=new UserModel()
    const User = await user.addUser(req.body)
    res.status(200).send(User)
  } catch (err) {
    console.log(err)
    res.status(400).send({Error: "Error Creating User", status:400})
  }
})

module.exports = router;
