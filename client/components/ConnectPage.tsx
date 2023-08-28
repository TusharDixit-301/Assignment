import dynamic from 'next/dynamic';
import React from 'react';
const ConnnectPage: React.FC = () => {
	return (
		<>
			<div>
				<main>
					<div className="flex flex-col justify-center items-center text-center mt-auto animate-gradient mb-auto h-[50vh]">
						<span className="text-7xl bg-gradient-to-r bg-clip-text  text-transparent from-blue-500 via-purple-500 to-pink-500 animate-text z-40 mb-2 pb-2">
							Please Connect
						</span>
						<span className="text-7xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-text text-transparent bg-clip-text z-40 mb-2 pb-2">
							your wallet to Continue
						</span>
					</div>
				</main>
			</div>
		</>
	);
};

export default dynamic(() => Promise.resolve(ConnnectPage), { ssr: false });
