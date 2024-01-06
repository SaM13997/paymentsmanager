import { SlPieChart } from 'react-icons/sl'
import { PiNutLight } from 'react-icons/pi'
import { SlGrid } from 'react-icons/sl'

export default function Header(props) {
	return (
		<header className="p-4 px-6 flex items-center justify-between">
			<div className="flex gap-3  items-center">
				<img
					src="/images/avatar.jpg"
					alt="user avatar"
					className="w-12 h-12 rounded-full object-cover "
				/>
				<div className="flex-col -gap-1 flex">
					<p className="text-sm text-zinc-500 font-semibold">Good Morning</p>
					<p className="font-semibold text-sm">Lexi</p>
				</div>
			</div>
			<div className="icons flex gap-4 text-zinc-500 text-xl font-semibold items-center py-2">
				<SlPieChart className="rotate-90" />
				<PiNutLight className="text-2xl stroke-[3]" />
				<SlGrid />
			</div>
		</header>
	)
}
