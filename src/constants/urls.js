const BACKEND_URL_LOCAL = 'http://localhost:3005';
const BACKEND_URL_HEROKU = 'https://momentum-backend.herokuapp.com'

export const BACKEND_URL = (process.env.NODE_ENV === 'production') ? BACKEND_URL_HEROKU : BACKEND_URL_LOCAL;