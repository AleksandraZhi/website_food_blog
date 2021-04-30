const fs = require('fs')
const path = require('path')

const allDishes = JSON.parse(
	fs.readFileSync(path.resolve(__dirname, './../public/db/db.json'))
)

exports.mainPage = (req, res) => {
	res.status(200).render('index', { allDishes })
}
