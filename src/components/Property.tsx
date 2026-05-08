"use client";

import Image from "next/image";
import Link from "next/link";
import { Camera, Video, Heart, MapPin, Bed, Bath, Maximize, Plus, ArrowRight } from "lucide-react";

const properties = [
	{
		image: "/assets/images/property-1.jpg",
		price: "$34,900",
		title: "New Apartment Nice View",
		address: "77-79 2nd Avenue, New York, NY 10003, USA",
		beds: 3,
		baths: 2,
		sqft: 4450,
		type: "For Sale",
		author: "William Seklo",
		authorAvatar: "/assets/images/author.jpg",
		images: 4,
		videos: 2,
	},
	{
		image: "/assets/images/property-2.jpg",
		price: "$20,500",
		title: "Modern House For Rent",
		address: "92-94 3rd Avenue, New York, NY 10003, USA",
		beds: 4,
		baths: 3,
		sqft: 5200,
		type: "For Rent",
		author: "William Seklo",
		authorAvatar: "/assets/images/author.jpg",
		images: 6,
		videos: 1,
	},
	{
		image: "/assets/images/property-3.jpg",
		price: "$56,000",
		title: "Luxury Villa In Rego Park",
		address: "12-14 1st Avenue, New York, NY 10003, USA",
		beds: 5,
		baths: 4,
		sqft: 6800,
		type: "For Sale",
		author: "William Seklo",
		authorAvatar: "/assets/images/author.jpg",
		images: 8,
		videos: 3,
	},
];

const Property = () => {
	return (
		<section
			className="py-20 lg:py-32 bg-slate-50/50 relative overflow-hidden"
			id="property">
			{/* Background decoration */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
			<div className="absolute -bottom-32 -left-32 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
					<div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
						<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
						<span className="text-orange-600 font-bold text-sm uppercase tracking-wider">
							Properties
						</span>
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
						Featured <span className="text-orange-500">Listings</span>
					</h2>
					<p className="mt-4 text-slate-600 text-lg">
						Discover our handpicked premium properties available for sale and
						rent.
					</p>
				</div>

				{/* Property Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{properties.map((item, index) => (
						<article
							key={index}
							className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-orange-200 flex flex-col">
							{/* Image */}
							<div className="relative h-64 lg:h-72 overflow-hidden">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>

								{/* Gradient overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

								{/* Type Badge */}
								<div className="absolute top-4 left-4">
									<span
										className={`px-4 py-1.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider shadow-lg ${
											item.type === "For Sale" ? "bg-orange-500" : "bg-blue-600"
										}`}>
										{item.type}
									</span>
								</div>

								{/* Media Count */}
								<div className="absolute bottom-4 left-4 flex gap-4 text-white/90 z-10">
									<div className="flex items-center gap-1.5 text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
										<Camera className="w-3.5 h-3.5" />
										<span>{item.images}</span>
									</div>
									<div className="flex items-center gap-1.5 text-sm bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
										<Video className="w-3.5 h-3.5" />
										<span>{item.videos}</span>
									</div>
								</div>

								{/* Favorite button - appears on hover */}
								<button
									className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-red-500 hover:text-white shadow-lg"
									aria-label="Add to favorites">
									<Heart className="w-5 h-5" />
								</button>
							</div>

							{/* Content */}
							<div className="p-6 lg:p-8 flex-1 flex flex-col">
								{/* Price */}
								<div className="flex items-baseline gap-1 mb-3">
									<span className="text-2xl lg:text-3xl font-bold text-orange-500">
										{item.price}
									</span>
									<span className="text-slate-400 text-sm font-medium">
										/Month
									</span>
								</div>

								{/* Title */}
								<h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors duration-300 leading-snug">
									<Link
										href="#"
										className="hover:underline decoration-2 underline-offset-4 decoration-orange-500/50">
										{item.title}
									</Link>
								</h3>

								{/* Address */}
								<p className="text-slate-500 text-sm mb-6 flex items-start gap-2">
									<MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
									<span className="line-clamp-2">{item.address}</span>
								</p>

								{/* Features */}
								<ul className="grid grid-cols-3 gap-2 border-y border-slate-100 py-4 mb-6">
									<li className="flex flex-col items-center gap-1 text-center">
										<div className="flex items-center gap-1 text-slate-900 font-bold text-sm">
											<Bed className="w-4 h-4 text-orange-500" />
											{item.beds}
										</div>
										<span className="text-xs text-slate-500">Beds</span>
									</li>
									<li className="flex flex-col items-center gap-1 text-center border-x border-slate-100">
										<div className="flex items-center gap-1 text-slate-900 font-bold text-sm">
											<Bath className="w-4 h-4 text-orange-500" />
											{item.baths}
										</div>
										<span className="text-xs text-slate-500">Baths</span>
									</li>
									<li className="flex flex-col items-center gap-1 text-center">
										<div className="flex items-center gap-1 text-slate-900 font-bold text-sm">
											<Maximize className="w-4 h-4 text-orange-500" />
											{item.sqft}
										</div>
										<span className="text-xs text-slate-500">Sqft</span>
									</li>
								</ul>

								{/* Footer */}
								<div className="flex justify-between items-center mt-auto">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-slate-100">
											<Image
												src={item.authorAvatar}
												alt={item.author}
												width={40}
												height={40}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<p className="text-slate-900 font-bold text-sm leading-tight">
												{item.author}
											</p>
											<p className="text-slate-500 text-xs">Estate Agent</p>
										</div>
									</div>

									<div className="flex gap-2">
										<button
											className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
											aria-label="Add to compare">
											<Plus className="w-5 h-5" />
										</button>
										<button
											className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500 hover:bg-orange-500 hover:text-white transition-all duration-300 lg:hidden"
											aria-label="Add to favorites">
											<Heart className="w-5 h-5" />
										</button>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center mt-12 lg:mt-16">
					<Link
						href="/properties"
						className="group inline-flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-500 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg">
						View All Properties
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Property;
