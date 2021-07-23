/**
 * Create 404.js file to show a custom 404 page
 */
import React from "react";
import Layout from "../layouts/index";

const NotFoundPage = () => (
  <div>
    <Layout>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Layout>
  </div>
);

export default NotFoundPage;
