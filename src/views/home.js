const layout = require("./layout");

module.exports = () =>
  layout({
    title: "Login",

    body: `
      <div class="avatar">
        G
      </div>

      <h1>
        Welcome
      </h1>

      <p>
        Sign in to continue
      </p>

      <a
        href="/auth/google"
        class="btn btn-google"
      >
        Continue with Google
      </a>
    `,
  });
