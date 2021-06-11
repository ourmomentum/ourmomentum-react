const BACKEND_URL_LOCAL = 'http://localhost:3005';
const BACKEND_URL_HEROKU = 'https://momentum-backend.herokuapp.com'

export const BACKEND_URL = (process.env.NODE_ENV === 'production') ? BACKEND_URL_HEROKU : BACKEND_URL_LOCAL;
export const GOOGLE_CLIENT_ID = '1048966674577-tki8kmghmduvcah0ptm3k6pj7so0te4g.apps.googleusercontent.com'
