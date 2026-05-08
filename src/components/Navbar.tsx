"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
	{ href: "#home", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#service", label: "Service" },
	{ href: "#property", label: "Property" },
	{ href: "#blog", label: "Blog" },
	{ href: "#contact", label: "Contact" },
];

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const pathname = usePathname();

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	// Reset mobile menu on route change without an effect to avoid cascading renders
	const [prevPathname, setPrevPathname] = useState(pathname);
	if (pathname !== prevPathname) {
		setPrevPathname(pathname);
		setIsMobileMenuOpen(false);
	}

	return (
		<>
			<header
				className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
					isScrolled ?
						"bg-white/95 backdrop-blur-md shadow-lg py-3"
					:	"bg-transparent py-5"
				}`}>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link
							href="/"
							className="relative z-10 flex-shrink-0">
							<Image
								src="/assets/images/logo.png"
								alt="Homeverse"
								width={180}
								height={50}
								className={`w-auto transition-all duration-300 ${
									isScrolled ? "h-9" : "h-10"
								}`}
								priority
							/>
						</Link>

						{/* Desktop Navigation */}
						<nav className="hidden lg:block">
							<ul className="flex items-center gap-8">
								{navLinks.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="relative text-sm font-semibold uppercase tracking-wider text-slate-700 hover:text-orange-500 transition-colors duration-200 py-2 group">
											{link.label}
											<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
										</Link>
									</li>
								))}
							</ul>
						</nav>

						{/* Desktop Actions */}
						<div className="hidden lg:flex items-center gap-4">
							<button
								onClick={() => setIsSearchOpen(!isSearchOpen)}
								className="p-2 text-slate-700 hover:text-orange-500 transition-colors rounded-full hover:bg-slate-100"
								aria-label="Search">
								<Search className="w-5 h-5" />
							</button>

							<button
								className="p-2 text-slate-700 hover:text-orange-500 transition-colors rounded-full hover:bg-slate-100"
								aria-label="Account">
								<User className="w-5 h-5" />
							</button>

							<button
								className="p-2 text-slate-700 hover:text-orange-500 transition-colors rounded-full hover:bg-slate-100 relative"
								aria-label="Cart">
								<ShoppingCart className="w-5 h-5" />
								<span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
									2
								</span>
							</button>

							<Link
								href="/add-listing"
								className="bg-orange-500 text-white font-bold px-6 py-2.5 rounded-lg shadow-md hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm uppercase tracking-wide">
								Add Listing
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							className="lg:hidden relative z-50 p-2 text-slate-800 hover:text-orange-500 transition-colors"
							aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
							aria-expanded={isMobileMenuOpen}>
							{isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
						</button>
					</div>
				</div>

				{/* Search Bar Dropdown */}
				<div
					className={`absolute left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden ${
						isSearchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
					}`}>
					<div className="container mx-auto px-4 py-4">
						<div className="relative max-w-2xl mx-auto">
							<input
								type="text"
								placeholder="Search properties..."
								className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
								autoFocus={isSearchOpen}
							/>
							<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
						</div>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
					isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				onClick={() => setIsMobileMenuOpen(false)}
				aria-hidden="true"
			/>

			{/* Mobile Menu Panel */}
			<aside
				className={`fixed top-0 right-0 h-full w-[300px] sm:w-[360px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}>
				<div className="flex flex-col h-full">
					{/* Mobile Header */}
					<div className="flex items-center justify-between p-6 border-b border-slate-100">
						<Link
							href="/"
							onClick={() => setIsMobileMenuOpen(false)}>
							<Image
								src="/assets/images/logo.png"
								alt="Homeverse"
								width={150}
								height={40}
								className="h-8 w-auto"
							/>
						</Link>
						<button
							onClick={() => setIsMobileMenuOpen(false)}
							className="p-2 text-slate-500 hover:text-orange-500 transition-colors rounded-full hover:bg-slate-50"
							aria-label="Close menu">
							<X className="w-6 h-6" />
						</button>
					</div>

					{/* Mobile Navigation */}
					<nav className="flex-1 overflow-y-auto py-6 px-6">
						<ul className="space-y-1">
							{navLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										onClick={() => setIsMobileMenuOpen(false)}
										className="block py-3 px-4 text-slate-700 font-semibold uppercase tracking-wider hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200">
										{link.label}
									</Link>
								</li>
							))}
						</ul>

						{/* Mobile Actions */}
						<div className="mt-8 pt-8 border-t border-slate-100 space-y-3">
							<button className="w-full flex items-center gap-3 py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors">
								<Search className="w-5 h-5" />
								Search
							</button>
							<button className="w-full flex items-center gap-3 py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors">
								<User className="w-5 h-5" />
								My Account
							</button>
							<button className="w-full flex items-center gap-3 py-3 px-4 text-slate-700 font-medium hover:bg-slate-50 rounded-lg transition-colors">
								<ShoppingCart className="w-5 h-5" />
								Cart
								<span className="ml-auto bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
									2
								</span>
							</button>
						</div>
					</nav>

					{/* Mobile CTA */}
					<div className="p-6 border-t border-slate-100 bg-slate-50">
						<Link
							href="/add-listing"
							onClick={() => setIsMobileMenuOpen(false)}
							className="block w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-xl text-center shadow-md hover:bg-slate-800 transition-colors uppercase tracking-wide">
							Add Listing
						</Link>
					</div>
				</div>
			</aside>
		</>
	);
};

export default Navbar;
