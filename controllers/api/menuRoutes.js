// ROUTES FOR MENU
const router = require('express').Router();
const Products = require('../../models/Products');

// route to get all productses
router.get('/', async (req, res) => {
  const product = await Products.findAll().catch((err) => { 
      res.json(err);
    });
    
    if (product) {
        const items = product.map((item) => item.get({ plain: true }));
        res.render('menu', {items: items});
    }
   
     
    });

// route to get one products
router.get('/:id', async (req, res) => {
  try{ 
      const product = await Products.findByPk(req.params.id);
      if(!product) {
          res.status(404).json({message: 'No products with this id!'});
          return;
      }
      const products = product.get({ plain: true });
      
      res.send(product)
//       res.render('Products', products);
    } catch (err) {
        res.status(500).json(err);
    };     
});

module.exports = router;

