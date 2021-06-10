const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const path = require('path');

const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const dbData = await Post.findAll({
            order: [
                ["date_created", "desc"],
                [Comment, "date_created", "ASC"],
              ],
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
        for (i = 0;i < posts.length; i++) {
            if (posts[i].OP.user_id == req.session.user_id) {
                posts[i].postOwner = true;
            }
        }
        const userData = await User.findOne({
            where: {
                user_id: req.session.user_id
            }
        })
        console.log(posts)
        let user = userData.get({ plain: true });
        let { username } = userData
        res.render('dashboard', {
            username,
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/post', withAuth, (req, res) => {

    res.render('createpost',{
        loggedIn: req.session.loggedIn,
    });
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