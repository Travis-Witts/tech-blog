const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const path = require('path');

const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbData = await Post.findAll();

        let posts = dbData.map((blogPost) => blogPost.get({ plain: true }));
        if (posts.length < 5) {
            var ArrLength = products.length;
        }
        else {
            var ArrLength = 5
        }
        const fiveArr = []

        for (i = posts.length; i = ArrLength - 5; i--) {
            fiveArr.push(posts[i])
        }

        res.render('homepage', {
            fiveArr,
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

// rendering chat room 
router.get('/chatroom', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                user_id: req.session.user_id,
            }
        });

        let user = userData.get({ plain: true });

        res.render('chatroom', {
            user,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;