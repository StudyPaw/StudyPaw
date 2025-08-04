const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();

app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const GOOGLE_CLIENT_ID = '1096290115051-57vafnr9v23t8t6nngsf1o6o9krpifin.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

// Configure Passport to use Google OAuth
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // In production, save/find the user in your DB. Here, just return profile.
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Home route
app.get('/', (req, res) => {
  res.send(`<h2>StudyPaw</h2><a href="/auth/google">Sign in with Google</a>`);
});

// Start Google OAuth login
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// OAuth callback route
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.send(`Hello, ${req.user.displayName}! <a href="/logout">Logout</a>`);
  }
);

// Logout route
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
