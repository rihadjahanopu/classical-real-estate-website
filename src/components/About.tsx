import Image from "next/image";
import { Home, Leaf, Wine, ShieldCheck, Quote, ArrowRight, Phone } from "lucide-react";

const features = [
	{ icon: Home, text: "Smart Home Design" },
	{ icon: Leaf, text: "Beautiful Scene Around" },
	{ icon: Wine, text: "Exceptional Lifestyle" },
	{ icon: ShieldCheck, text: "Complete 24/7 Security" },
];

const About = () => {
	return (
		<section
			className="py-20 lg:py-32 bg-white relative overflow-hidden"
			id="about">
			{/* Background decoration */}
			<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
			<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
					{/* Images Column */}
					<div className="flex-1 w-full relative order-2 lg:order-1">
						<div className="relative max-w-lg mx-auto lg:mx-0">
							{/* Main Image */}
							<div className="relative rounded-2xl overflow-hidden shadow-2xl group">
								<Image
									src="/assets/images/about-banner-1.png"
									alt="Modern house interior with contemporary design"
									width={600}
									height={700}
									className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							</div>

							{/* Secondary Image - Offset */}
							<div className="absolute -bottom-8 -right-4 lg:-right-12 w-[55%] border-4 border-white rounded-2xl shadow-2xl overflow-hidden hidden sm:block transform hover:scale-105 transition-transform duration-500">
								<Image
									src="/assets/images/about-banner-2.jpg"
									alt="Luxury living room detail"
									width={400}
									height={300}
									className="w-full h-auto object-cover"
								/>
							</div>

							{/* Experience Badge */}
							<div className="absolute -top-4 -left-4 lg:-left-8 bg-orange-500 text-white rounded-2xl p-6 shadow-xl hidden sm:block animate-bounce-slow">
								<div className="text-4xl font-bold mb-1">15+</div>
								<div className="text-sm font-medium opacity-90">
									Years of
									<br />
									Experience
								</div>
							</div>

							{/* Decorative dots */}
							<div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 opacity-20">
								<svg
									viewBox="0 0 100 100"
									className="w-full h-full text-orange-500 fill-current">
									<pattern
										id="dots"
										x="0"
										y="0"
										width="20"
										height="20"
										patternUnits="userSpaceOnUse">
										<circle
											cx="2"
											cy="2"
											r="2"
										/>
									</pattern>
									<rect
										width="100"
										height="100"
										fill="url(#dots)"
									/>
								</svg>
							</div>
						</div>
					</div>

					{/* Content Column */}
					<div className="flex-1 order-1 lg:order-2 max-w-xl lg:max-w-none">
						{/* Section Label */}
						<div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
							<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
							<span className="text-orange-600 font-bold text-sm uppercase tracking-wider">
								About Us
							</span>
						</div>

						{/* Heading */}
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6 lg:mb-8">
							The Leading Real Estate{" "}
							<span className="text-orange-500">Rental</span> Marketplace.
						</h2>

						{/* Description */}
						<p className="text-slate-600 text-lg leading-relaxed mb-8 lg:mb-10">
							Over 39,000 people work for us in more than 70 countries all over
							the world. This breadth of global coverage, combined with
							specialist services and local expertise, makes us uniquely
							positioned to serve your real estate needs.
						</p>

						{/* Features Grid */}
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-10 lg:mb-12">
							{features.map((item, index) => (
								<li
									key={index}
									className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 group cursor-default">
									<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 shadow-sm">
										<item.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
									</div>
									<p className="text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">
										{item.text}
									</p>
								</li>
							))}
						</ul>

						{/* Quote Block */}
						<blockquote className="relative bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-500 p-6 lg:p-8 rounded-r-2xl mb-10">
							<Quote className="absolute top-4 right-4 text-orange-200 w-10 h-10 opacity-50" />
							<p className="text-slate-600 italic text-lg leading-relaxed relative z-10">
								&ldquo;Enimad minim veniam quis nostrud exercitation llamco
								laboris. Lorem ipsum dolor sit amet&rdquo;
							</p>
						</blockquote>

						{/* CTA */}
						<div className="flex flex-col sm:flex-row items-center gap-4">
							<button className="group relative bg-orange-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-orange-500/25 hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto overflow-hidden">
								<span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider text-sm">
									Our Services
									<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
								</span>
							</button>

							<a
								href="#contact"
								className="flex items-center gap-2 text-slate-600 hover:text-orange-500 font-semibold transition-colors group">
								<span className="w-10 h-10 rounded-full border-2 border-slate-200 group-hover:border-orange-500 flex items-center justify-center transition-colors">
									<Phone className="w-4 h-4" />
								</span>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
