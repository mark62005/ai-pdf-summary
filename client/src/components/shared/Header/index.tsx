import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import NavLink from "../NavLink";

function Header() {
	const isLoggedIn = false;

	return (
		<header className="container flex justify-between items-center mx-auto py-4 px-2 lg:px-8 border-b-2">
			<Logo />

			<nav className="flex lg:items-center lg:justify-center lg:gap-12  gap-4">
				<Button variant="link">
					<NavLink
						href="#pricing"
						label="Pricing"
					/>
				</Button>

				<Button variant="link">
					<NavLink
						href="/dashboard"
						label="Your Summaries"
					/>
				</Button>
			</nav>

			<div className="flex lg:justify-end lg:grow">
				{isLoggedIn ? (
					<div className="flex items-center gap-2">
						<Link href="/upload">Upload a PDF</Link>

						<div>Pro</div>

						<Button>User</Button>
					</div>
				) : (
					<div className="">
						<Button>
							<NavLink
								href="/sign-in"
								label="Sign In"
							/>
						</Button>
					</div>
				)}
			</div>
		</header>
	);
}
export default Header;
