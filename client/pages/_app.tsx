import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/globals.css';

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[polygonMumbai],
	[publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: 'Contact_Details',
	projectId: 'contact-details-1',
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WagmiConfig config={wagmiConfig}>
			<RainbowKitProvider chains={chains}>
				<Component {...pageProps} />
			</RainbowKitProvider>
		</WagmiConfig>
	);
}

export default MyApp;
