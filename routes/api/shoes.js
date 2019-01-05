const express = require('express');
const router = express.Router();
const Shoe = require('../../models/Shoe')

//*************PUBLIC ROUTES************
//ROUTES THAT WILL BE USED IN FRONT END
//************************************** 

//@route GET api/shoes/
//@desc IF `req.body` has data => return the shoe(s)
//      IF `req.body` is empty => return all shoes
        //Only used by owner ^
        //Make sure GET request on Postman has EMPTY body
router.get('/', (req, res) => {  
    Shoe.find({"name": new RegExp(req.query.name, "i")}, null, {sort: {display: 1}})
            .then(shoes => res.json(shoes))
});

router.get('/:id', (req, res) => {
    Shoe.findById(req.params.id)
        .then(shoe => res.json(shoe))  
});



//*********PRIVATE ROUTES**************
//ONLY USED TO ADD/UPDATE/DELETE SHOES
//********NOT USED IN FRONT END********


//@route POST api/shoes
//@desc Add new shoe
router.post('/', (req, res) => {
    const newShoe = new Shoe({
        display: req.body.display,
        name: req.body.name,
        images: req.body.images
    });

    newShoe.save()
        .then(item => res.json(item));
});

//@route PUT api/shoes
//@desc Update shoe (with more images)
router.put('/:id', (req, res) => {
    Shoe.findByIdAndUpdate(
        req.params.id, 
        { "$push": { "images": req.body.images } }, 
        {new: true, useFindAndModify: false},
        (error, success) => (error) ? console.log(error) : res.json(success)
    )     
});

//@route DELETE api/shoes/:id
//@desc Delete a shoe
router.delete('/:id', (req, res) => {
    Shoe.findById(req.params.id)
        .then(shoe => shoe.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
});

module.exports = router;