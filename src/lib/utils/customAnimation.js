export function customAnimation(node, { delay, duration }) {
	return {
		delay,
		duration,
		css: (t) => {
			return `
        opacity: ${t}; 
        transform: scale(${t});
        `
		}
	}
}
