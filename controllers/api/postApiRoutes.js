const router = require('express').Router();
const { Post } = require('../../models');
const sequelize = require('sequelize')

const withAuth = require('../../utils/auth');


router.post('/', withAuth,  async (req, res) => {
    console.log(req.body)
    try {
        const newReviewData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletedReview = await Post.destroy({
            where: {
                post_id: req.params.id,
            },
        });
        res.status(200).redirect('/')
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
});

module.exports = router;