const layout = require("./layout");
module.exports = () => layout({
  title: "Home",
  body: '<a href="/auth/google">Login with Google</a>'
});