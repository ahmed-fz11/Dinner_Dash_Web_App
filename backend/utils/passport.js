import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import User from '../models/User.js';
import passport from 'passport';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'Random string',
};

passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
  try {
    const user = await User.findOne({ id: jwtPayload.id });

    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
      // or you could create a new account
    }
  } catch (err) {
    return done(err, false);
  }
}));
