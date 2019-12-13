import passport from 'passport';
import JwtStrategy from 'passport-jwt';

const jwtOptions = {
  jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
};

const verifyUser = (payload, done) => {};

passport.use(new JwtStrategy.Strategy(jwtOptions));
