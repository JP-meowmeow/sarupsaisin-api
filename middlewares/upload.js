const path = require('path')
const multer = require('multer')

// console.log(__dirname)
// console.log(path.join(__dirname, '../upload-pic'))
const storage = multer.diskStorage({
	destination : (req, file, cb) => cb(null, path.join(__dirname, '../upload')),
	filename : (req, file, cb) => {
		// const {id} = req.user
		// const fullFilename = `${id}_${Date.now()}_${Math.round(Math.random()*1000)}${path.extname(file.originalname)}`
		const fullFilename = `${Date.now()}${path.extname(file.originalname)}`
		cb(null, fullFilename)
        // console.log('fullFilename', fullFilename)
	}
})

module.exports = multer({storage : storage})