const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const path = require('path');

const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbData = await Post.findAll({
            include: [
                'OP',
                {
                    model: Comment,
                    required: false,
                    attributes: ['content', 'user_id', 'date_created'],
                    include: "commenter"
                }
            ]
        });
        let posts = dbData.map((blogPost) => blogPost.get({ plain: true }));
        console.log(posts[0].comments)
        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('signup');
});

module.exports = router;