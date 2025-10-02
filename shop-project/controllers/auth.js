const User = require('../models/user')

exports.getLogin = (req, res, next) => {
  // const isLoggedIn = req.get('Cookie').split(';')[1].trim('').split('=')[1] === 'true';
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  User.findById('68dc06cb642431c483e38533')
  .then(user => {
        req.session.isLoggedIn = true;
        req.session.user = user;
        res.redirect('/')
      })
      .catch(err => console.log(err));
}