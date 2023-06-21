import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Promo from './components/promo'
import Products from './components/products'
import Designer from './components/designer'
import Letter from './components/letter'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Promo />
    <Products />
    <Designer />
    <Letter />
    <Footer />
    </>
  )
}
