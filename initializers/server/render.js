import React from 'react';
import { renderToString } from 'react-dom/server';
import App from "components/App";


export default (req, res) => {
  const context = {};
  renderToString(<App location={req.url} context={context} />);
}