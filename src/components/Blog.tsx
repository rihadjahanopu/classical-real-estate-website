"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, User, Calendar, MessageCircle, ArrowRight } from "lucide-react";

const blogs = [
	{
		image: "/assets/images/blog-1.png",
		title: "The Most Inspiring Interior Design Of 2021",
		author: "Admin",
		category: "Interior",
		date: "Apr 27, 2022",
		readTime: "5 min read",
	},
	{
		image: "/assets/images/blog-2.jpg",
		title: "Recent Commercial Real Estate Transactions",
		author: "Admin",
		category: "Estate",
		date: "Apr 27, 2022",
		readTime: "8 min read",
	},
	{
		image: "/assets/images/blog-3.jpg",
		title: "Renovating a Living Room? Experts Share Their Secrets",
		author: "Admin",
		category: "Room",
		date: "Apr 27, 2022",
		readTime: "6 min read",
	},
];

const Blog = () => {
	return (
		<section
			className="py-20 lg:py-32 bg-slate-50/50 relative overflow-hidden pb-40"
			id="blog">
			{/* Background decoration */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
			<div className="absolute -top-32 -right-32 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
					<div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
						<span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
						<span className="text-orange-600 font-bold text-sm uppercase tracking-wider">
							News & Blogs
						</span>
					</div>

					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
						Latest News <span className="text-orange-500">Feeds</span>
					</h2>
					<p className="mt-4 text-slate-600 text-lg">
						Stay updated with the latest trends, tips, and insights from the
						real estate world.
					</p>
				</div>

				{/* Blog Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{blogs.map((blog, index) => (
						<article
							key={index}
							className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col">
							{/* Image */}
							<div className="relative h-60 lg:h-64 overflow-hidden">
								<Image
									src={blog.image}
									alt={blog.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>

								{/* Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

								{/* Category Badge */}
								<div className="absolute top-4 left-4">
									<span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
										{blog.category}
									</span>
								</div>

								{/* Read Time */}
								<div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
									<span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
										<Clock className="w-4 h-4 text-orange-500" />
										{blog.readTime}
									</span>
								</div>
							</div>

							{/* Content */}
							<div className="p-6 lg:p-8 flex-1 flex flex-col">
								{/* Meta */}
								<div className="flex items-center gap-4 text-sm text-slate-500 mb-4 flex-wrap">
									<div className="flex items-center gap-1.5">
										<User className="w-4 h-4 text-orange-500" />
										<span className="font-medium">{blog.author}</span>
									</div>
									<span className="w-1 h-1 bg-slate-300 rounded-full" />
									<div className="flex items-center gap-1.5">
										<Calendar className="w-4 h-4 text-orange-500" />
										<time>{blog.date}</time>
									</div>
								</div>

								{/* Title */}
								<h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-snug">
									<Link
										href="#"
										className="hover:underline decoration-2 underline-offset-4 decoration-orange-500/50">
										{blog.title}
									</Link>
								</h3>

								{/* Spacer */}
								<div className="flex-1" />

								{/* Footer */}
								<div className="flex justify-between items-center border-t border-slate-100 pt-5 mt-4">
									<div className="flex items-center gap-1.5 text-slate-400 text-sm">
										<MessageCircle className="w-4 h-4" />
										<span>0 Comments</span>
									</div>

									<Link
										href="#"
										className="group/link inline-flex items-center gap-2 text-orange-500 font-bold uppercase text-xs tracking-widest hover:text-slate-900 transition-colors">
										Read More
										<ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center mt-12 lg:mt-16">
					<Link
						href="/blog"
						className="group inline-flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-500 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg">
						View All Articles
						<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Blog;
