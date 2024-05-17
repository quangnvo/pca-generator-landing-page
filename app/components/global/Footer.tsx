import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';


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
								<Logo />
							</div>

							{/* Right side */}
							<div className="flex mb-6 md:mb-0">

								{/* Icon Github */}
								<a href="https://github.com/quangnvo" target="_blank">
									<Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700">
										<Github />
									</Button>
								</a>
								{/* End of Icon Github */}

								{/* Icon LinkedIn */}
								<a href="https://www.linkedin.com/in/quangnguyen0528/" target="_blank">
									<Button variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700">
										<Linkedin />
									</Button>
								</a>
								{/* End of Icon LinkedIn */}
							</div>
						</div>

						<div className="text-center flex flex-col gap-2 justify-center items-center ">
							<p>Build with 💓 by Quang</p>
							<p>© 2024 Quang. All Rights Reserved.</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
