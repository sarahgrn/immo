import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="#f2f1ee">
      <div className="container mx-auto flex items-center justify-between py-4 border-b border-gray-300">
        <div className="flex-1">
          <Image
            src={'/logo.png'}
            width={70}
            height={60}
            alt='logo'
            className="rounded-full"
          />
        </div>
        <div className="text-center flex-1 font-bold text-lg">
          SARAMI IMMO
        </div>
        <nav className="flex-1 text-right">
          <a href="#about" className="text-sm mx-4 hover:underline">About Us</a>
          <a href="#contact" className="text-sm mx-4 hover:underline">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;
