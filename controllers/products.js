const express = require('express');
const Product = require('../models/products');

const router = express.Router();

// router.use((req, res, next) => {
//     req.session.loggedIn ? next() : res.redirect('test1/login');
    
// });




//Index --gallery
router.get('/index', (req, res) => {

    console.log(req.session.username);
    console.log(req.session);

    Product.find({username: req.session.username })
        .then((products) => {                           //how to use async/await here
            res.render('user/Index', { products });
        })
        .catch((error) => {
            res.status(400).json({ error })
    });
});

//New 
router.get('/new', (req, res) => {
    res.render('products/New');
});

module.exports = router;

//Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then( product => {
            res.redirect('/products');
        })
        .catch( error => {
            res.json({ error });
        });
});

//Update
router.put('products/:id', (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, { new: true })
        .then( product => {
            res.redirect('/products');
        })
        .catch( error => {
            res.json({ error });
        });
});
//Create
router.post('/', (req, res) => {
    console.log('we in here');
    console.log(req.body);
    //massage data if need be
    Product.create(req.body)
        // .then( createdProduct => {
        //     res.redirect(`/products/${createdProduct._id}`);
        // })
        // .catch( error => {
        //     res.json({ error });
        // });
});

//Edit
router.get('/:id/edit', (req, res) => {
    const { id } = req.params;

    Product.findById(id) 
        .then( product => {
            res.render('products/Edit', { product });
        })
        .catch( error => {
            res.json({ error });
        });
});

//Show
router.get('/:id', (req, res) => {
    const id = req.params.id;

    Product.findById(id)
        .then( product => {
            res.render('products/Show', { product });
        })
        .catch( error => {
            res.json({ error });
        });
});

module.exports = router;