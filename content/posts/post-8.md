---
title: Localhost address to your domain address in vercel
description: "How to change localhost to your domain address while deploy your code to vercel"
date: 2023-03-20
image: "/images/posts/02.jpg"
categories: ["development"]
authors: ["Israr"]
tags:
  [
    "Next.js",
    "Vercel",
    "Deployment",
    "Environment Variables",
    "API Endpoint",
    "CORS",
    "Web Development",
  ]
draft: false
---

### Localhost to your domain setting while deploy to vercel

When deploying your Next.js application to Vercel, you should update the apiEndpoint to use the correct URL of your deployed API on Vercel. Here's what you should do:

Set up Environment Variable in Vercel:

Go to your Vercel Dashboard (https://vercel.com/).
Select your project.
Navigate to the "Settings" tab.
Scroll down to the "Environment Variables" section.
Add a new environment variable:
Key: NEXT_API_URL
Value: The URL of your deployed API on Vercel, e.g., **https://'past-your-vercel-app-domain-here'.vercel.app/api/contact**.

Now go to your code and Update Code in your Component:

Update your component code to use the environment variable:

Write this code in the file where api are called in your code.Also create variable in your .env file

const apiEndpoint = process.env.NEXT_API_URL || "http://localhost:3000/api/contact";

This code will use the environment variable if available, or default to the local URL during development.

to switch between addresses.When you are in local envirnment the code will use the address defined in the
.env file and when the code are deployed it will use the address defined in the envirnment variables of vercel website.Now it will not through the Network error with address http://localhost:3000/api/contact.

Deploy:

Deploy your application to Vercel.
Now, your apiEndpoint will dynamically use the correct API URL based on the environment, whether it's deployed on Vercel or running locally.
