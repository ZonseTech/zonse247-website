## Authentication service

The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important functions:

- `login():` POST {username, password} & save JWT to Local Storage
- `logout():` remove JWT from Local Storage
- `register():` POST {username, email, password}
- `getCurrentUser():` get stored user information (including JWT)
