function authenticate(req, res, next) {
    if (req.header.authorization === 'Gaston') {
        next();
    } else {
        res.status(400).json({
            message: 'Invalid credentials'
        });
    }
}

export {
    authenticate
}