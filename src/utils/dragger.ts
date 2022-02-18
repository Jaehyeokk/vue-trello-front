import dragula from 'dragula'
import 'dragula/dist/dragula.css'

const dragger = {
	init(containers: any, options?: any): any {
		return dragula([...containers], options)
	},
	sibling({ el, candidates, type }: any): any {
		const curId = el.dataset[type + 'Id'] * 1
		let prev: any = null
		let next: any = null
		candidates.forEach((el: any, idx: any, arr: any) => {
			const id = el.dataset[type + 'Id'] * 1
			if (id === curId) {
				prev =
					idx > 0
						? {
								id: arr[idx - 1].dataset[type + 'Id'] * 1,
								pos: arr[idx - 1].dataset[type + 'Pos'] * 1,
						  }
						: null
				next =
					idx < arr.length - 1
						? {
								id: arr[idx + 1].dataset[type + 'Id'] * 1,
								pos: arr[idx + 1].dataset[type + 'Pos'] * 1,
						  }
						: null
			}
		})
		return { prev, next }
	},
}

export default dragger
