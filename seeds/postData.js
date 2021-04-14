const { Post } = require('../models');

const postData = [
    {
        title: "Bad day",
        content: "Having a bad day",
        user_id: 1
    },
    {
        title: "Avg Day",
        content: "Having a avg day",
        user_id: 2
    },
    {
        title: "Good day",
        content: "Having a good day",
        user_id: 3
    },
];

const seedPost = () => Post.bulkCreate(postData, {
    individualHooks: true
});

module.exports = seedPost;