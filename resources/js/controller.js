'use strict'

const buttonWelcome = document.querySelector('.btn-welcome')
const welcomeModalOverlay = document.querySelector('.overlay')
const welcomeModalText = document.querySelector('.welcome')
const galleryRow1 = document.querySelector('.meat-1')
const galleryRow2 = document.querySelector('.mix')
const galleryRow3 = document.querySelector('.meat-2')
const galleryRow4 = document.querySelector('.cake')

const imgFillRow = function (
	container,
	firstImageNr,
	totalImages,
	imgName,
	description
) {
	for (let i = firstImageNr; i <= totalImages; i++) {
		const imgNameNr = imgName + i
		container.insertAdjacentHTML(
			'beforeend',
			`<div class="gallery__img"><img src="./resources/images/numbered/${imgNameNr}.jpg" alt=${description}></div>`
		)
	}
}

const screenBigLoad = function () {
	imgFillRow(galleryRow1, 1, 6, 'salty-meat-', 'meaty dish')
	imgFillRow(galleryRow2, 1, 6, 'salty-mix-', 'salty mixed dish')
	imgFillRow(galleryRow3, 7, 12, 'salty-meat-', 'meaty dish')
	imgFillRow(galleryRow4, 1, 6, 'sweet-cake-', 'cake')
}

buttonWelcome.addEventListener('click', function () {
	welcomeModalText.classList.toggle('hidden')
	welcomeModalOverlay.classList.toggle('hidden')
})

screenBigLoad()
