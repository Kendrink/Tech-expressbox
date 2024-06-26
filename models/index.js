
const User = require("./User");
const Post = require("./thoughts");
const Comment = require("./comments");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});


thoughts.belongsTo(User, {
  foreignKey: "user_id",
});


User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});


Comment.belongsTo(User, {
  foreignKey: "user_id",
});


Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});


thoughts.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});


module.exports = { User, thoughts, Comment };

