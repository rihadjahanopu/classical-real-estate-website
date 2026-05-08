module.exports = {
	theme: {
		extend: {
			animation: {
				"bounce-slow": "bounce-slow 3s ease-in-out infinite",
				"bounce-slow-delayed": "bounce-slow 3s ease-in-out 1.5s infinite",
				"fade-in-up": "fadeInUp 0.8s ease-out",
				"bounce-slow": "bounce-slow 3s ease-in-out infinite",
			},
			keyframes: {
				"bounce-slow": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},

				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
		},
	},
};
