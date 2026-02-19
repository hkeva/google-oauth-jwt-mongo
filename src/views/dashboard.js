const layout = require("./layout");
module.exports = (user) => layout({
  title: "Dashboard",
  body: `<h1>Welcome ${user.name}</h1><p>${user.email}</p><a href="/auth/logout">Logout</a>`
});