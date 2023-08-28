import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import AdminPage from './AdminPage';

const HomePage: React.FC = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPhone(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Submitted:', { name, email, phone });
		// You can perform further actions like sending data to a server or storing in state
	};
	const { address } = useAccount();
	if (address == '0xe66ade4F6a17d5b2D742faAF9c8Aa6E2dd9cf68E') {
		return <AdminPage />;
	} else {
		return (
			<div className="max-w-md mx-auto p-4 border-4 border-purple-600 rounded-xl">
				<h1 className="text-4xl font-bold mb-4 bg-gradient-to-r bg-clip-text  text-transparent from-blue-500 via-purple-500 to-pink-500 animate-text">
					Enter Your Information
				</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="name"
							className="block font-medium mb-1 bg-gradient-to-r from-amber-500 via-orange-600  to-red-600
                animate-text text-transparent bg-clip-text"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							className="w-full p-2 border rounded"
							value={name}
							onChange={handleNameChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block font-medium mb-1 bg-gradient-to-r from-amber-500 via-orange-600  to-red-600
                animate-text text-transparent bg-clip-text"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							className="w-full p-2 border rounded"
							value={email}
							onChange={handleEmailChange}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="phone"
							className="block text-xl font-medium mb-1 bg-gradient-to-r from-amber-500 via-orange-600  to-red-600
                animate-text text-transparent bg-clip-text"
						>
							Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							className="w-full p-2 border rounded"
							value={phone}
							onChange={handlePhoneChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
};

export default dynamic(() => Promise.resolve(HomePage), { ssr: false });
