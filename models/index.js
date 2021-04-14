const Post = require('./Post');
const Comment = require('./Comment');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

User.hasMany(Post,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'OP'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'commenter'
});

Comment.belongsTo(Post, {
    foreignKey: 'Post_id'
});


module.exports = { User, Post, Comment };