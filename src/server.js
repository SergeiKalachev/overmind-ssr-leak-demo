import App from "./App";
import React from "react";
import { createOvermindSSR } from "overmind";
import { Provider } from "overmind-react";
import { config } from "./overmind";
import { StaticRouter } from "react-router-dom";
import express from "express";
import { renderToString } from "react-dom/server";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get("/*", (req, res) => {
    const context = {};
    const overmind = createOvermindSSR(config);

    overmind.state.products.value = new Date().toISOString();
    overmind.state.brands.value = Math.random();
    /* PLACE DEBUGGER HERE: */
    /* And then look for growing number of symbols under overmind.state.brands.brands */
    /* or under overmind.state.products.products properties with each new page render */
    debugger;

    if (false) {
      overmind.state.products.products = ["123"];
    }

    const markup = renderToString(
      <Provider value={overmind}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
    <script>
      window.__OVERMIND_MUTATIONS = ${JSON.stringify(overmind.hydrate())}
    </script>
</html>`
      );
    }
  });

export default server;
