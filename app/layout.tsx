import './globals.css'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import RegisterModal from '../components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from '../components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from '../components/modals/RentModal'
const inter = Inter({ subsets: ['latin'] })

const font = Nunito({
  subsets: ['latin'],
})

export const metadata = {
  title: 'HR App',
  description: 'HR APP',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
