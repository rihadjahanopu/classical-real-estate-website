import {
	ArrowRight,
	ChevronDown,
	Home,
	Play,
	Star,
	TrendingUp,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
	return (
		<section
			className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
			id="home">
			{/* Background decorative elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse" />
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-100/20 to-transparent rounded-full" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
					{/* Text Content */}
					<div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none">
						{/* Badge */}
						<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full px-4 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow">
							<Home className="text-orange-500 w-5 h-5" />
							<span className="text-slate-800 font-bold text-sm uppercase tracking-widest">
								Real Estate Agency
							</span>
						</div>

						{/* Headline */}
						<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 lg:mb-8">
							Find Your Dream{" "}
							<span className="relative inline-block">
								<span className="relative z-10">House</span>
								<span className="absolute bottom-2 left-0 w-full h-3 bg-orange-200/60 -rotate-1 rounded-sm" />
							</span>{" "}
							By Us
						</h1>

						{/* Description */}
						<p className="text-slate-600 text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 border-l-4 border-orange-500 pl-6 max-w-xl mx-auto lg:mx-0">
							Discover premium properties in prime locations. We make your
							journey to the perfect home seamless and enjoyable.
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
							<button className="group relative bg-orange-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/25 hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto overflow-hidden">
								<span className="relative z-10 flex items-center justify-center gap-2">
									Make An Enquiry
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</span>
								<div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
							</button>

							<button className="group flex items-center gap-3 px-6 py-4 rounded-xl border-2 border-slate-200 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 font-semibold text-slate-700 w-full sm:w-auto justify-center">
								<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
									<Play className="w-4 h-4 ml-0.5 fill-current" />
								</div>
								Watch Video
							</button>
						</div>

						{/* Stats */}
						<div className="mt-12 lg:mt-16 grid grid-cols-3 gap-6 lg:gap-8 max-w-lg mx-auto lg:mx-0">
							{[
								{ value: "2K+", label: "Properties" },
								{ value: "500+", label: "Clients" },
								{ value: "15+", label: "Years Exp." },
							].map((stat) => (
								<div
									key={stat.label}
									className="text-center lg:text-left">
									<div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
										{stat.value}
									</div>
									<div className="text-sm text-slate-500 font-medium">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Image */}
					<div className="flex-1 w-full relative lg:pl-8">
						<div className="relative z-10">
							{/* Main image container with hover effect */}
							<div className="relative group">
								<Image
									src="/assets/images/hero-banner.png"
									alt="Modern luxury house with contemporary architecture"
									width={800}
									height={600}
									className="w-full h-auto drop-shadow-2xl rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
									priority
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
								/>

								{/* Floating card - Price */}
								<div className="absolute -bottom-4 left-2 lg:-left-8 bg-white rounded-xl shadow-xl p-4 animate-bounce-slow">
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
											<TrendingUp className="text-orange-500 w-6 h-6" />
										</div>
										<div>
											<div className="text-xs text-slate-500 font-medium">
												Starting from
											</div>
											<div className="text-lg font-bold text-slate-900">
												$2,500/mo
											</div>
										</div>
									</div>
								</div>

								{/* Floating card - Rating */}
								<div className="absolute -top-4 right-2 lg:-right-8 bg-white rounded-xl shadow-xl p-4 animate-bounce-slow-delayed">
									<div className="flex items-center gap-2">
										<div className="flex text-orange-400">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className="w-4 h-4 fill-current"
												/>
											))}
										</div>
										<span className="text-sm font-bold text-slate-900">
											4.9/5
										</span>
									</div>
									<div className="text-xs text-slate-500 mt-1">
										2,000+ Reviews
									</div>
								</div>
							</div>
						</div>

						{/* Decorative blobs */}
						<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
						<div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-900/5 rounded-full blur-3xl" />
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
				<span className="text-xs text-slate-400 uppercase tracking-widest">
					Scroll
				</span>
				<ChevronDown className="text-slate-400 w-6 h-6" />
			</div>
		</section>
	);
};

export default Hero;
