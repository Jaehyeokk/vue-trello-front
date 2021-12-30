import dragula from 'dragula'
import 'dragula/dist/dragula.css'

const dragger = {
	init(containers, options) {
		return dragula([...containers], options)
	},
	sibling({ el, candidates }) {
		const curId = el.dataset.cardId * 1
		let prev = null
		let next = null
		candidates.forEach((el, idx, arr) => {
			const id = el.dataset.cardId * 1
			if (id === curId) {
				prev =
					idx > 0
						? {
								id: arr[idx - 1].dataset.cardId * 1,
								pos: arr[idx - 1].dataset.cardPos * 1,
						  }
						: null
				next =
					idx < arr.length - 1
						? {
								id: arr[idx + 1].dataset.carId * 1,
								pos: arr[idx + 1].dataset.cardPos * 1,
						  }
						: null
			}
		})
		return { prev, next }
	},
}

export default dragger
