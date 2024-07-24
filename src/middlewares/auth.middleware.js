export const auth = (req, res, next) => {
    if (req.session.userEmail) {
        next();
    } else {
        res.redirect('/login');
    }

}
// securing the application no one can see products without login by adding auth in the routes