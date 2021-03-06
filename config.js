'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || 'http://localhost:3000',
  DATABASE_URL:
        process.env.DATABASE_URL || 'mongodb://cohort16:th1nkful@ds143678.mlab.com:43678/news-app-capstone',
  TEST_DATABASE_URL:
        process.env.TEST_DATABASE_URL ||
        'mongodb://localhost/newsapp-backend-test',
  FACEBOOK_APP_ID: 1989958031254651,
  FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET,
  FACEBOOK_APP_TOKEN: process.env.FACEBOOK_APP_TOKEN,
  GOOGLE_CLIENT_ID: '1013252237653-a8qenljcndk5fm41nifn7oetaaglr6k3.apps.googleusercontent.com',
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_APP_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || '7d'
};

