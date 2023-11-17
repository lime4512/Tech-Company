import './globals.scss'
import { Header } from '@/components/header/Header'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<Header />
				{children}
			</body>
		</html>
	)
}
