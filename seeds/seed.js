const sequelize = require('../config/connection');
const { User,Thoughts,Comment } = require('../models');

const userData = require('./userData.json');
const postData = require("./thoughtsData.json");
const commentData = require("./commentData.json");


const seedDatabase = async () => {
  await sequelize.sync({ force: true });



  for (const thoughts of thoughtsData) {
    await Post.create({
      ...thoughts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await Comment.bulkCreate(commentData);




  await User.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
