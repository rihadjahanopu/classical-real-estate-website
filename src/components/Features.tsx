import { Car, Waves, ShieldCheck, HeartPulse, Library, Bed, Home, Gamepad2, ArrowRight, Sparkles } from "lucide-react";

const amenities = [
	{ icon: Car, title: "Parking Space", count: "200+ Spots" },
	{ icon: Waves, title: "Swimming Pool", count: "Olympic Size" },
	{
		icon: ShieldCheck,
		title: "Private Security",
		count: "24/7 Guard",
	},
	{ icon: HeartPulse, title: "Medical Center", count: "On-site" },
	{ icon: Library, title: "Library Area", count: "5,000+ Books" },
	{ icon: Bed, title: "King Size Beds", count: "Premium" },
	{ icon: Home, title: "Smart Homes", count: "IoT Ready" },
	{ icon: Gamepad2, title: "Kid's Playland", count: "Safe Zone" },
];

const Features = () => {
	return (
		<section className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/3 rounded-full blur-3xl" />
				<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
					<div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
						<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
						<span className="text-orange-600 font-bold text-sm uppercase tracking-wider">
							Our Amenities
						</span>
					</div>

					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
						Building <span className="text-orange-500">Amenities</span>
					</h2>
					<p className="mt-4 text-slate-600 text-lg">
						World-class facilities designed for your comfort, security, and
						lifestyle.
					</p>
				</div>

				{/* Amenities Grid */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
					{amenities.map((item, index) => (
						<div
							key={index}
							className="group relative bg-white rounded-2xl p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-100 hover:border-orange-200 overflow-hidden">
							{/* Hover background fill */}
							<div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-2xl" />

							{/* Content */}
							<div className="relative z-10 flex flex-col items-center text-center gap-4">
								{/* Icon */}
								<div className="w-14 h-14 lg:w-16 lg:h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-2xl lg:text-3xl text-orange-500 group-hover:bg-white/20 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
									<item.icon className="w-8 h-8" />
								</div>

								{/* Title */}
								<h3 className="font-bold text-slate-900 text-base lg:text-lg group-hover:text-white transition-colors duration-500">
									{item.title}
								</h3>

								{/* Count/Detail - appears on hover */}
								<span className="text-xs lg:text-sm font-medium text-orange-500 group-hover:text-orange-100 transition-colors duration-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
									{item.count}
								</span>

								{/* Arrow */}
								<div className="w-8 h-8 lg:w-10 lg:h-10 border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 group-hover:border-white/40 group-hover:text-white transition-all duration-500 group-hover:rotate-[-45deg] mt-2">
									<ArrowRight className="w-4 h-4 lg:w-5 h-5" />
								</div>
							</div>

							{/* Corner decoration */}
							<div className="absolute -top-8 -right-8 w-16 h-16 bg-orange-500/10 rounded-full group-hover:bg-white/10 transition-colors duration-500" />
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="text-center mt-12 lg:mt-16">
					<div className="inline-flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 lg:p-6 shadow-lg">
						<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
							<Sparkles className="text-orange-500 w-6 h-6" />
						</div>
						<div className="text-left">
							<div className="font-bold text-slate-900">
								Premium Living Experience
							</div>
							<div className="text-sm text-slate-500">
								All amenities included in every property
							</div>
						</div>
						<div className="hidden sm:block w-px h-10 bg-slate-200" />
						<div className="hidden sm:flex items-center gap-2 text-orange-500 font-bold text-sm">
							<span>Explore</span>
							<ArrowRight className="w-4 h-4" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
