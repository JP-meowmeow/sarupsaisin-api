module.exports = (req, res) => {
	res.status(404).json({ msg : 'page not found'})
}