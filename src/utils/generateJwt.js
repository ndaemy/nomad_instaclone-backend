import jwt from 'jsonwebtoken';

export default id => jwt.sign({ id }, process.env.JWT_SECRET);
