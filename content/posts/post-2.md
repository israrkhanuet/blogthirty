---
title: How to Solve CORS Error in Node.js
description: "Learn how to handle CORS errors in Node.js and enable Cross-Origin Resource Sharing for your server. Follow the steps to configure CORS and bypass the Same Origin Policy."
date: 2024-03-02
image: "/images/posts/cors.webp"
categories: ["development"]
authors: ["Israr"]
tags: ["Cors", "Cors error", "Cors error in Node.js"]
draft: false
---

# CORS Policy Problem

As a web developer, you've likely encountered the 'CORS' error when attempting to call an API. But why does it happen?

## The Great CORS Error

Browsers, for security reasons, restrict cross-origin HTTP requests initiated from scripts. If you try to access your API hosted at `https://api.example.com` from your client-side frontend application at `https://frontend.example.com`, the browser prevents this request from completing.

You need to consider CORS when:

1. The API is accessed by the browser.
2. The API is hosted on a separate domain.

### Why Does it Happen?

Browsers enforce a security feature called Same Origin Policy. According to this policy, Same Origin calls are allowed, and Different Origin calls are not allowed.

#### Same Origin Policy Components:

- **Scheme name:** The protocol used to access the resource on the Internet (e.g., `http://`, `https://`, `ftp://`).
- **Hostname:** The address of the host where the resource is located (e.g., `www.example.com`).
- **Port Number:** The communication endpoint where your application runs.

If these three combinations of Scheme, Hostname, and Port are the same, the browser identifies it as the Same Origin, and the request gets completed.

### Is it Impossible to Make Cross-Origin HTTP Requests?

No, and this is where CORS (Cross-Origin Resource Sharing) comes into play.

## How CORS Works

CORS allows the server to explicitly whitelist certain origins, helping to bypass the same-origin policy.

If your server is configured for CORS, it will return an extra header with "Access-Control-Allow-Origin" on each response.

For example, if your API server hosted at `https://api.example.com/users` is CORS configured, and you are making a request from your client application at `https://frontend.example.com` to fetch some data, the response will have this header:

Access-Control-Allow-Origin: https://frontend.example.com

### CORS Preflight Request

Preflighted requests first send an HTTP request by the OPTIONS method to the resource on the other domain to determine if the actual request is safe to send or not.

## How to Enable CORS

To enable CORS on your server application, follow these steps:

1. Install the cors npm package:

```javascript
npm install cors
```

Add the following code to your Node.js server application (e.g., in app.js):

```javascript
Copy code
// Require the cors package
var cors = require('cors');

// Enable CORS
app.use(
cors({
origin: "_",
methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
preflightContinue: false
})
);
```

Here, using origin: "\_" means any domain can access this application.
