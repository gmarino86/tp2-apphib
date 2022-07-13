import jwt from 'jsonwebtoken';

function autorization(req, res, next) {
    try {
        const token = req.headers['auth-token'] || '';
        let user = jwt.verify(token, 'secret');
        req.user = user;
        next();
    } catch {
        res.status(401).json({ message: 'Invalid token' });
    }
}

export {
    autorization
}