import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import { useAccount } from 'wagmi';
import ConnnectPage from '../components/ConnectPage';
import HomePage from '../components/HomePage';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	const { isConnected, address } = useAccount();
	const [show, setShow] = useState(false);

	return (
		<div className={styles.container}>
			<Head>
				<title>Home</title>
				<meta
					content="App for storing contact details on the blockchain"
					name="description"
				/>
				<link href="/favicon.ico" rel="icon" />
			</Head>
			<Navbar />
			<main className={styles.main}>
				{!isConnected ? <ConnnectPage /> : <HomePage />}
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
