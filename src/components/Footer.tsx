"use client";

import Image from "next/image";
import Link from "next/link";
import { 
	MapPin, 
	Phone, 
	Mail, 
	ChevronRight, 
	Send, 
	ArrowRight 
} from "lucide-react";

const companyLinks = [
	"About",
	"Blog",
	"All Products",
	"Locations Map",
	"FAQ",
	"Contact us",
];

const serviceLinks = [
	"Order tracking",
	"Wish List",
	"Login",
	"My account",
	"Terms & Conditions",
	"Promotional Offers",
];

// Using SVG paths for social icons since Lucide removed brand icons in latest versions
const socialLinks = [
	{ 
		icon: (props: any) => (
			<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
			</svg>
		), 
		label: "Facebook" 
	},
	{ 
		icon: (props: any) => (
			<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
			</svg>
		), 
		label: "Twitter" 
	},
	{ 
		icon: (props: any) => (
			<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
			</svg>
		), 
		label: "LinkedIn" 
	},
	{ 
		icon: (props: any) => (
			<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
				<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
			</svg>
		), 
		label: "YouTube" 
	},
];

const Footer = () => {
	return (
		<footer className="bg-slate-900 text-white relative pt-32 lg:pt-40">
			{/* Background decoration */}
			<div className="absolute inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-3xl" />
				<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* CTA Card - Safe negative margin for overlap */}
				<div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 lg:p-12 xl:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 -mt-56 mb-16 lg:mb-24 shadow-2xl shadow-orange-500/20">
					<div className="text-center lg:text-left max-w-xl">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 lg:mb-4 leading-tight">
							Looking for a dream home?
						</h2>
						<p className="text-white/80 text-base lg:text-lg">
							We can help you realize your dream of a new home
						</p>
					</div>
					<Link
						href="/properties"
						className="group bg-white text-slate-900 font-bold px-8 lg:px-10 py-4 lg:py-5 rounded-xl shadow-xl hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-3 whitespace-nowrap border-2 border-transparent hover:border-white">
						<span>Explore Properties</span>
						<ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
					</Link>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 xl:gap-16 mb-16 lg:mb-20">
					{/* Brand Column */}
					<div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-6">
						<Link
							href="/"
							className="inline-block">
							<Image
								src="/assets/images/logo-light.png"
								alt="Homeverse"
								width={180}
								height={50}
								className="h-10 w-auto"
							/>
						</Link>
						<p className="text-slate-400 leading-relaxed text-sm lg:text-base">
							Your trusted partner in finding the perfect property.
						</p>
						<ul className="flex flex-col gap-4">
							<li className="flex items-start gap-4 text-slate-300 group">
								<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
									<MapPin className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
								</div>
								<address className="not-italic text-sm leading-relaxed pt-2">
									Brooklyn, New York, United States
								</address>
							</li>
							<li>
								<a
									href="tel:+0123456789"
									className="flex items-start gap-4 text-slate-300 hover:text-orange-400 transition-colors group">
									<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
										<Phone className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
									</div>
									<span className="text-sm pt-2">+0123-456789</span>
								</a>
							</li>
							<li>
								<a
									href="mailto:contact@homeverse.com"
									className="flex items-start gap-4 text-slate-300 hover:text-orange-400 transition-colors group">
									<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
										<Mail className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" />
									</div>
									<span className="text-sm pt-2">contact@homeverse.com</span>
								</a>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h4 className="text-lg font-bold mb-6 lg:mb-8 relative inline-block">
							Company
							<span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full" />
						</h4>
						<ul className="flex flex-col gap-3 lg:gap-4">
							{companyLinks.map((item) => (
								<li key={item}>
									<Link
										href="#"
										className="group flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm lg:text-base">
										<ChevronRight className="w-4 h-4 text-orange-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services Links */}
					<div>
						<h4 className="text-lg font-bold mb-6 lg:mb-8 relative inline-block">
							Services
							<span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full" />
						</h4>
						<ul className="flex flex-col gap-3 lg:gap-4">
							{serviceLinks.map((item) => (
								<li key={item}>
									<Link
										href="#"
										className="group flex items-center gap-2 text-slate-400 hover:text-orange-400 transition-colors text-sm lg:text-base">
										<ChevronRight className="w-4 h-4 text-orange-500 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Social & Newsletter */}
					<div>
						<h4 className="text-lg font-bold mb-6 lg:mb-8 relative inline-block">
							Follow Us
							<span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full" />
						</h4>
						<div className="flex gap-3 mb-8 lg:mb-10">
							{socialLinks.map(({ icon: Icon, label }) => (
								<Link
									key={label}
									href="#"
									aria-label={label}
									className="w-10 h-10 lg:w-12 lg:h-12 bg-white/5 rounded-xl flex items-center justify-center text-lg lg:text-xl hover:bg-orange-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-orange-500">
									<Icon className="w-5 h-5 lg:w-6 h-6" />
								</Link>
							))}
						</div>

						<h4 className="text-lg font-bold mb-4 relative inline-block">
							Newsletter
							<span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full" />
						</h4>
						<p className="text-slate-400 text-sm mb-4">
							Subscribe for latest updates and offers.
						</p>
						<form
							className="relative"
							onSubmit={(e) => e.preventDefault()}>
							<input
								type="email"
								placeholder="Email Address"
								className="w-full bg-white/5 border border-white/10 rounded-xl px-4 lg:px-6 py-3 lg:py-4 pr-14 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all placeholder:text-slate-500"
							/>
							<button
								type="submit"
								className="absolute right-2 top-2 bottom-2 bg-orange-500 px-3 lg:px-4 rounded-lg hover:bg-white hover:text-orange-500 transition-all duration-300 flex items-center justify-center"
								aria-label="Subscribe">
								<Send className="w-5 h-5" />
							</button>
						</form>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-white/10 py-6 lg:py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs lg:text-sm">
					<p>© 2026 Homeverse. All Rights Reserved.</p>
					<div className="flex flex-wrap justify-center gap-4 lg:gap-8">
						{["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
							(item) => (
								<Link
									key={item}
									href="#"
									className="hover:text-white transition-colors">
									{item}
								</Link>
							)
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
