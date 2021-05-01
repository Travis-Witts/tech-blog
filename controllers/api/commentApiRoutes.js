const router = require('express').Router();
const { Post, Comment, User } = require('../../models');
const sequelize = require('sequelize')

const withAuth = require('../../utils/auth');

router.post('/:id', withAuth,  async (req, res) => {
    try {
        const newCommentData = await Comment.create({
            content: req.body.content,
            user_id: req.session.user_id,
            post_id: req.params.id,
        });
        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const deletedComment = await Comment.destroy({
            where: {
                comment_id: req.params.id,
            },
        });
        console.log(deletedComment);
        res.status(200).redirect('/')
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});


module.exports = router;