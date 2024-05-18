import Link from 'next/link';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

export default function Footer() {
	return (
		<div className='border-t border-t-gray-400'>
			<div className="py-1 max-w-full">
				<div className="py-7">
					<div>
						<div className="flex items-center justify-between">

							{/* Left side */}
							<div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
								<Logo />
							</div>

							{/* Right side */}
							<div className="flex mb-6 md:mb-0">

								{/* Icon Github */}
								<Link href="https://github.com/quangnvo/pca-generator" target="_blank">
									<Button variant="ghost" className='hover:bg-orange-100'>
										<Github />
									</Button>
								</Link>
								{/* End of Icon Github */}
							</div>
						</div>

						<div className="text-center flex flex-col gap-2 justify-center items-center text-sm">
							<p>© 2024. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
