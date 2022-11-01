const models = require('../../models');

module.exports = {
  getAllBlogs: async function () {
    return new Promise(async function (resolve, reject) {
      try {
        const blogs = await models.Blog.find().populate('user', [
          '_id',
          'userName',
          'email',
          'firstName',
          'lastName',
          'avatar',
        ]);
        resolve(blogs);
      } catch (err) {
        reject(err);
      }
    });
  },
  getBlogById: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const blog = await models.Blog.findById(req.query.id).populate('user', [
          '_id',
          'userName',
          'email',
          'firstName',
          'lastName',
          'avatar',
        ]);
        resolve(blog);
      } catch (err) {
        reject(err);
      }
    });
  },
  createBlog: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const user = await models.User.findOne({
          _id: req.user.id,
        });
        if (user) {
          const blog = await models.Blog.create({
            user: user,
            title: data.title,
            content: data.content,
            coverImage: data.coverImage,
            blogImage: data.blogImage,
          });
          resolve({
            errCode: 0,
            errMessage: 'Created Blog Successfully',
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: 'User not found',
          });
        }
      } catch (err) {
        reject(err);
      }
    });
  },
  updateBlog: async function (req) {
    const data = req.body;
    return new Promise(async function (resolve, reject) {
      try {
        const blog = await models.Blog.findOneAndUpdate(
          {
            _id: req.query.id,
          },
          {
            title: data.title,
            content: data.content,
          }
        );
        resolve({
          errCode: 0,
          errMessage: 'Updated Blog Successfully',
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  deleteBlog: async function (req) {
    return new Promise(async function (resolve, reject) {
      try {
        const blog = await models.Blog.findOneAndDelete({
          _id: req.query.id,
        });
        resolve({
          errCode: 0,
          errMessage: 'Deleted Blog Successfully',
        });
      } catch (err) {
        reject(err);
      }
    });
  },
};
