<script>
	export let label = ''
	export let isToggled = false
</script>

<label>
	<input type="checkbox" bind:checked={isToggled} />
	<div class="toggle" />
	{label}
</label>

<style>
	label {
		--width: 40px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);

		display: flex;
		gap: 0.5rem;
		align-items: center;
	}
	.toggle {
		position: relative;
		width: var(--width);
		height: var(--height);
		border-radius: var(--radius);
		border: solid 1px navy;
		transition: transorm 0.3s ease-in-out;
	}
	.toggle::after {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		height: var(--height);
		width: var(--height);
		border-radius: var(--radius);
		background-color: var(--buttonColor, gold);
		box-shadow: -1px 1px 2px rgba(0, 0, 0, 0.3);
		transition: transorm 0.3s ease-in-out;
	}
	input {
		display: none;
	}
	input:checked + .toggle::after {
		transform: translate3d(100%, 0, 0);
	}

	input:checked + .toggle {
		background: var(--toggleBgColor, hsl(233, 100%, 12%));
	}
</style>
