const express = require('express');
const signupmodel = require('../models/signupModel');

const router = express.Router();

router.get('/', async (req, res)=>{
    const userFind = await signupmodel.find();
    res.json(userFind);
});

router.post('/', async (req, res)=>{
    //const signup = req.body;
    const modelsignUP = new signupmodel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        password: req.body.pasword
    });

    try{
        const savedsignup = await modelsignUP.save();
        res.json(savedsignup);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:userid', async (req, res)=>{
    try{
        const foundusername = await signupmodel.findById(req.params.userid);
        res.json(foundusername);
    }catch(err){
        res.json({message: err});
    }
});

// router.get('/:username', async (req, res)=>{
//     try{
//         const foundusername = await signupmodel.findOne(username);
//         res.json(foundusername);
//     }catch(err){
//         res.json({message: "Error Findings"});
//     }
// });

router.delete('/:userID', async (req, res)=>{ 
    try{
        const removedusername = await signupmodel.remove({_id: req.params.userID});
        res.json(removedusername);
    }catch(err){
        res.json({message: err});
    }
});

router.patch('/:userID', async(req, res)=>{
    try{
        const updatedUser = await signupmodel.updateOne(
            { _id: req.params.userID }, 
            { $set: {firstname: req.body.firstname} }
            );
            res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;