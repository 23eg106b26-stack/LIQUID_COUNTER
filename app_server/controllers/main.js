/* GET homepage */
const index = (req, res) => {
res.render('index', { title: 'my food app' });
};
module.exports = {
index
};
