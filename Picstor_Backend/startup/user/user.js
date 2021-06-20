const UserRouter = require("../../routes/api/v1/auth/users");
module.exports = function (app) {
  app.use("/api/users", UserRouter);
};
