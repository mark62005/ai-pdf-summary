"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types/app/component-props";
import { cn } from "@/lib/utils";

function NavLink({ href, label, className }: NavLinkProps) {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname !== "/" && pathname.startsWith(href));

	return (
		<Link
			href={href}
			className={cn("", className, isActive && "text-rose-500")}
		>
			{label}
		</Link>
	);
}
export default NavLink;
