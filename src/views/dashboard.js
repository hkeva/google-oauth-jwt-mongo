const layout = require("./layout");

module.exports = (user) =>
  layout({
    title: "Dashboard",

    body: `
      <div class="avatar">
        ${user.name.charAt(0)}
      </div>

      <h1>
        ${user.name}
      </h1>

      <p class="email">
        ${user.email}
      </p>

      <a
        href="/auth/logout"
        class="btn btn-logout"
      >
        Logout
      </a>
    `,
  });
