import { FileText } from "lucide-react";
import Link from "next/link";

function Logo() {
	return (
		<Link
			href="/"
			className="flex items-center gap-1 lg:gap-2 shrink-0 text-foreground font-semibold lg:text-lg hover:text-foreground/80"
		>
			<FileText className="size-5 lg:size-8 cursor-pointer hover:rotate-12 transform transition duration-200 ease-in-out" />
			AI PDF Summary
		</Link>
	);
}
export default Logo;
