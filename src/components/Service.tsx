"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
	{
		icon: "/assets/images/service-1.png",
		title: "Buy a home",
		text: "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
		cta: "Find A Home",
		color: "from-orange-500 to-red-500",
	},
	{
		icon: "/assets/images/service-2.png",
		title: "Rent a home",
		text: "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
		cta: "Find A Home",
		color: "from-blue-500 to-cyan-500",
	},
	{
		icon: "/assets/images/service-3.png",
		title: "Sell a home",
		text: "Over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.",
		cta: "Find A Home",
		color: "from-emerald-500 to-teal-500",
	},
];

const Service = () => {
	return (
		<section
			className="py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
			id="service">
			{/* Background decoration */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/3 rounded-full blur-3xl pointer-events-none" />
			<div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
					<div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
						<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
						<span className="text-orange-600 font-bold text-sm uppercase tracking-wider">
							Our Services
						</span>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
						Our Main <span className="text-orange-500">Focus</span>
					</h2>
					<p className="mt-4 text-slate-600 text-lg">
						Comprehensive real estate solutions tailored to your needs.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{services.map((service, index) => (
						<article
							key={index}
							className="group relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-200 overflow-hidden flex flex-col items-center text-center">
							{/* Background gradient on hover */}
							<div
								className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
							/>

							{/* Icon */}
							<div className="relative mb-6 lg:mb-8">
								<div className="w-24 h-24 lg:w-28 lg:h-28 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-500 shadow-sm group-hover:shadow-md">
									<Image
										src={service.icon}
										alt={service.title}
										width={80}
										height={80}
										className="w-16 h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-500 group-hover:scale-110"
									/>
								</div>
								{/* Decorative ring */}
								<div className="absolute -inset-3 border-2 border-dashed border-slate-200 rounded-3xl group-hover:border-orange-200 group-hover:rotate-6 transition-all duration-500" />
							</div>

							{/* Content */}
							<h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
								<Link
									href="#"
									className="hover:underline decoration-2 underline-offset-4 decoration-orange-500/50">
									{service.title}
								</Link>
							</h3>

							<p className="text-slate-600 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base max-w-sm">
								{service.text}
							</p>

							{/* CTA */}
							<Link
								href="#"
								className="group/link inline-flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-wider hover:text-slate-900 transition-colors duration-300 mt-auto">
								<span>{service.cta}</span>
								<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center group-hover/link:bg-slate-900 group-hover/link:text-white transition-all duration-300">
									<ArrowRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
								</div>
							</Link>

							{/* Bottom progress line */}
							<div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 w-0 group-hover:w-full transition-all duration-700 ease-out rounded-full" />

							{/* Corner accent */}
							<div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-500/0 group-hover:border-orange-500/30 rounded-tr-lg transition-all duration-500" />
							<div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-orange-500/0 group-hover:border-orange-500/30 rounded-bl-lg transition-all duration-500" />
						</article>
					))}
				</div>

				{/* Bottom Stats */}
				<div className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto">
					{[
						{ value: "1M+", label: "Properties Listed" },
						{ value: "50K+", label: "Happy Clients" },
						{ value: "200+", label: "Cities Covered" },
						{ value: "98%", label: "Satisfaction Rate" },
					].map((stat) => (
						<div
							key={stat.label}
							className="text-center p-4 lg:p-6 bg-white rounded-xl shadow-sm border border-slate-100">
							<div className="text-2xl lg:text-3xl font-bold text-orange-500 mb-1">
								{stat.value}
							</div>
							<div className="text-sm text-slate-500 font-medium">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;
