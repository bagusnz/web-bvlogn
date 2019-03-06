/**
 * Controller for accessing "/" page
 */

 /** Handling GET request */
exports.get = (req, res) => {
    res.render('root.ejs');
}