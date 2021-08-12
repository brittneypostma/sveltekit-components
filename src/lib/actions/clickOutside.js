export function clickOutside(node) {
	function handleClick(e) {
		if (node && !node.contains(e.target) && !e.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click-outside'))
		}
	}
	document.addEventListener('click', handleClick, true)

	return {
		destory() {
			document.removeEventListener('click', handleClick, true)
		}
	}
}
