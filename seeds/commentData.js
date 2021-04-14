const { Comment } = require('../models');

const commentData = [
    {
        content : "good job",
        user_id : 3,
        post_id : 1
    },
    {
        content : "good job",
        user_id : 2,
        post_id : 3
    },
    {
        content : "good job",
        user_id : 1,
        post_id : 2
    },
];

const seedComment = () => Comment.bulkCreate(commentData, {
    individualHooks: true
});

module.exports = seedComment;