const router = require('express').Router();
const { Category, PetAds } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
 try {
  const categoryData = await Category.findAll({
    include: [
      {
        model: PetAds,
        attributes: [
          'name',
          'breed',
          'microchip_number',
          'age',
          'price',
          'description'
            ],
      },
    ],
  });

  if (!categoryData) {
    res.status(404).json({ message: 'No category found with this id!' });
    return;
  }

 const category = categoryData.map((category) => 
    category.get({ plain: true })
 );

  res.status(200).json(category)
 } catch (err) {
  res.status(400).json(err);
 }
 });

router.get('/:id', async (req, res) => {
  try {
    const categoryByIdData = await Category.findByPk(req.params.id, {
      include: [  
        {
          model: PetAds,
          attributes: [
          'name', 
          'breed', 
          'microchip_number', 
          'age', 
          'price', 
          'description'
        ],
        },
      ],
    });

    if (!categoryByIdData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryByIdData);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
