import {
	Navbar,
	Footer,
	Welcome,
	Services,
	Transactions,
	Loader,
} from "@/components";

export default function Page() {
	return (
		<div className="min-h-screen">
			<div className="gradient-bg-welcome">
				<Navbar />
			</div>
		</div>
	);
}
