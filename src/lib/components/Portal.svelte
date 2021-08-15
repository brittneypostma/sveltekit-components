<script>
	function portal(node) {
		let target
		function update() {
			target = document.querySelector('main')
			target.appendChild(node)
			node.hidden = false
		}

		function destroy() {
			if (node.parentNode) {
				node.parentNode.removeChild(node)
			}
		}

		update()

		return {
			update,
			destroy
		}
	}
</script>

<div use:portal hidden>
	<slot />
</div>

<style>
	div {
		height: 100%;
	}
</style>
