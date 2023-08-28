import { ConnectButton } from '@rainbow-me/rainbowkit';
import router from 'next/router';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
	return (
		<nav className={`${styles.navbar}`}>
			<div
				onClick={() => {
					router.replace('/');
				}}
				className="cursor-pointer z-40"
			>
				<h1
					className="text-[2rem] bg-gradient-to-r from-amber-500 via-orange-600  to-red-600
            animate-text text-transparent bg-clip-text pt-4"
					onClick={() => {
						router.replace('/');
					}}
				>
					Save Contact
				</h1>
			</div>
			<div className="flex z-40">
				<ConnectButton />
			</div>
		</nav>
	);
};

export default Navbar;
