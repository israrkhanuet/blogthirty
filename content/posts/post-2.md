---
title: How to solve cors error in Node.js
description: "meta description"
date: 2023-03-20
image: "/images/posts/02.jpg"
categories: ["development"]
authors: ["Israr"]
tags: ["cors", "cors error", "cors error in nodejs"]
draft: false
---

CORS POLICY PROBLEM.
A CORS (Cross-Origin Resource Sharing) error message occurs when a web application tries to make a request to a resource from a different origin (domain, protocol, or port) i.e http to https than the one that served the application. This error message is a security feature implemented by web browsers to protect users from malicious attacks such as cross-site scripting (XSS) and cross-site request forgery (CSRF).

To solve this problem in Node js run this code
**npm install cors**
than use this method.. in app.js file

const cors = require("cors");

simply you can write

- app.use(cors())

by using this method in app.js file now the cors error will not show again.
