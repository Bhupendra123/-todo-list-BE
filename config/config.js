module.exports = {
  mongodb: {
    url: 'mongodb://localhost:27017/todo_list',
    options: {
      server: {
        socketOptions: {
          keepAlive: 1,
        },
      },
    },
  },
  port: 3500
};
