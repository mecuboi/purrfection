const router = require('express').Router();
const { User, PetAds, SavedPetsTag } = require('../../models');
const withAuth = require('../../utils/auth');

//get routes
router.get('/', async (req, res) => {
    try {
        const savedPetsTag= await SavedPetsTag.findAll();

            res.status(200).json(savedPetsTag)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.get('/:id', async (req, res) => {
    try {
        const savedPetsTagById = await SavedPetsTag.findByPk(req.params.id)

        if(!savedPetsTagById) {
            res.status(404).json({ message: 'No such tag found!' })
        }
        res.status(200).json(savedPetsTagById)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

//post routes
router.post('/', async (req, res) => {
    try {
        const postsavedPetsTag = await SavedPetsTag.create({
            saved_pet_ads_id: req.body.saved_pet_ads_id,
            user_tag_id: req.body.user_tag_id
            // OR
            //user_tag_id: req.session.id
        });

        res.status(200).json(postsavedPetsTag)

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});


//delete routes
router.delete('/:id', async (req, res) => {
    try {
        const deleteSavedPetsTag = await SavedPetsTag.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!deleteSavedPetsTag)  {
            res.status(404).json({ message: 'No such tag found!' })
        }

        res.status(200).json(deleteSavedPetsTag)


    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})
module.exports = router;

