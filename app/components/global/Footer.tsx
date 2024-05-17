import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';


export default function Footer() {
	return (
		<footer className='border-t border-zinc-800 mt-40'>
			<div className="py-1 max-w-full">
				<div className="container py-7">
					<div>
						<div className="flex flex-col justify-center items-center md:justify-between md:flex-row">

							{/* Left side */}
							<div className="flex flex-col items-center md:items-start mb-6 md:mb-0">

								{/* Logo */}
								<span className="font-bold text-lg md:text-xl ">PCA Generator</span>
							</div>

							{/* Right side */}
							<div className="flex mb-6 md:mb-0">

								{/* Icon Github */}
								<Link href="https://github.com/quangnvo/pca-generator" target="_blank">
									<Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700">
										<Github />
									</Button>
								</Link>
								{/* End of Icon Github */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
