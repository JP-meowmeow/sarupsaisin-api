module.exports = (req, res) => {
	res.status(404).json({ message : 'page not found'})
}