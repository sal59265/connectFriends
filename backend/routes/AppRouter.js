const AppRouter = require('express').Router();
const UserRouter = require('./UserRouter');
const HistoryRouter = require('./HistoryRouter');
const FavoriteRouter = require('./FavoriteRouter');
const FriendsRouter = require('./FriendsRouter');
AppRouter.use('/user', UserRouter);
AppRouter.use('/history', HistoryRouter);
AppRouter.use('/favorite', FavoriteRouter);
AppRouter.use('/friends', FriendsRouter);
module.exports = AppRouter;
