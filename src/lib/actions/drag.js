import { spring } from 'svelte/motion'

export function drag(node, { color = 'blue' } = {}) {
	let x
	let y

	const coords = spring({ x: 0, y: 0 })

	coords.subscribe((current) => {
		node.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`
	})

	node.addEventListener('mousedown', mousedown)

	function mousedown(e) {
		x = e.clientX
		y = e.clientY

		window.addEventListener('mouseup', mouseup)
		window.addEventListener('mousemove', mousemove)
	}
	function mouseup() {
		window.removeEventListener('mouseup', mouseup)
		window.removeEventListener('mousemove', mousemove)

		coords.update(() => {
			return { x: 0, y: 0 }
		})

		node.dispatchEvent(
			new CustomEvent('dragstop', {
				detail: {
					x,
					y
					// color,
					// node
				}
			})
		)

		x = 0
		y = 0
	}
	function mousemove(e) {
		const dx = e.clientX - x
		const dy = e.clientY - y

		x = e.clientX
		y = e.clientY

		coords.update((current) => {
			return {
				x: current.x + dx,
				y: current.y + dy
			}
		})
	}
}
