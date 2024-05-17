"use client"

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

// This is a custom hook that returns the current pathname of the page
import { usePathname } from 'next/navigation';

export default function Navbar() {

	/*#########################################
	#####     MAKE MENU BUTTON ACTIVE     #####
	#########################################*/
	// Get the current pathname
	// This is used for the active link in the navbar
	// If the button path is the same as the current pathname, the button will be highlighted
	const pathName = usePathname()
	const indexSecondSlashInPathName = pathName.indexOf("/", 1)
	if (indexSecondSlashInPathName > -1) {
		var pathNameNew = pathName.substring(0, indexSecondSlashInPathName)
	} else {
		var pathNameNew = pathName
	}

	interface NavBarButtonType {
		name: string,
		path: string
	}

	const renderSingleNavbarButton = ({ name, path }: NavBarButtonType) => {
		return <Link href={path}>
			<Button
				variant="ghost"
				className={` ${pathNameNew === path ? "bg-dark text-white hover:bg-gray-800 hover:text-white" : ""} flex items-center gap-x-2`}
			>
				<span className="text-base">{name}</span>
			</Button>
		</Link>
	}
	/*################################################
	#####     End of MAKE MENU BUTTON ACTIVE     #####
	################################################*/

	const [isNavbarOpened, setIsNavbarOpened] = useState(false);
	const toogleNavbar = (): void => {
		setIsNavbarOpened(!isNavbarOpened);
	}

	return (
		// NOTICE: "bg-light-50" and "bg-dark" is set in tailwind.config.js
		<div className="sticky inset-0 z-50 h-max rounded-none max-w-full shadow-sm border-b bg-light-50 dark:bg-dark border-zinc-800">

			<nav className="container py-3 flex items-center justify-between">

				{/* ----- LOGO ----- */}
				<Logo />
				{/* ----- End of LOGO ----- */}


				{/* ----- NAVIGATION BUTTONS ----- */}
				<div className="hidden md:block">
					<div className="flex items-center gap-x-1">
						{renderSingleNavbarButton({ name: "Home", path: "/" })}
						{renderSingleNavbarButton({ name: "Projects", path: "/projects" })}
					</div>
				</div>
				{/* ----- End of NAVIGATION BUTTONS ----- */}


				{/* ----- HAMBURGER ----- */}
				<div className="md:hidden flex items-center">
					<button
						className=""
						onClick={toogleNavbar}
					>
						{isNavbarOpened ? <X /> : <Menu />}
					</button>
				</div>
				{/* ----- End of HAMBURGER ----- */}
			</nav>

			{/* Trigger hambuger when in the mobile screen */}
			{isNavbarOpened && (
				<div className="md:hidden">
					<div className="flex flex-col gap-y-2 mb-3 items-center">
						{renderSingleNavbarButton({ name: "Home", path: "/" })}
						{renderSingleNavbarButton({ name: "Projects", path: "/projects" })}
					</div>
				</div>
			)}
			{/* End of trigger hambuger when in the mobile screen */}

		</div>
	);
}