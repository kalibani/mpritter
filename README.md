# mpritter
Mpritter it's an App like a Twitter, mini twitter .
you can send tweet, delete tweet, search by hashtag and updating your profile

client side:
cd client,
npm install,
npm run dev,
or
npm run build

server side:
cd server,
npm install,
nodemon ./bin/www

Enpoint List of applications:

| Route               | HTTP           | Description       |
| --------------------- |:--------------:| ------------    |
| `/api/users/auth/register`| POST            | Enpoint for Register User |
| `/api/users/auth/login`| POST            | Enpoint for Login User |
| `/api/users/:id`| GET            | Get a single user |
| `/api/users/profile`| POST            | GET Profile User |
| `/api/users/:id`| PUT            | Update a user with new info |
| `/api/tweet`| GET  | Get All Tweet |
| `/api/tweet`| POST  | Post Tweet |
| `/api/tweet/:id`| DELETE            | Delete Spesific Tweet |
