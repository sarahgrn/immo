"use client";
import Image from 'next/image';
import React from 'react';
import { Search } from 'lucide-react';

function Header() {
  
 
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    
     
    <header className="bg-[#f2f1ee] fixed top-0 left-0 w-full z-50 shadow-md">
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
      <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm mx-4 hover:underline hover:text-primary">
        About Us
      </a>
      <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm mx-4 hover:underline">
        Contact Us
      </a>
      <a href="/login" className="text-sm mx-4 hover:underline">Login</a>
    </nav>
  </div>
</header>

{/* Ajoute un espace en haut pour éviter que le contenu soit caché sous le header */}
<div className="pt-20"></div>  


     
      <section className="bg-[#f2f1ee] px-20 py-12">
        <div className="flex items-center">
          <h1 className="text-5xl font-semibold text-gray-900 w-2/3 ml-20">
            Looking to buy or <br /> rent a property?
          </h1>
          
          <div className="w-1/3 border border-gray-400 rounded-full flex items-center px-4 py-3 bg-white shadow-md">
            <Search className="text-gray-600" />
            <input
              type="text"
              placeholder="Enter an address or neighborhood"
              className="ml-3 w-full outline-none text-gray-700"
            />
          </div>
        </div>

        
        <div className="mt-8 flex justify-center">
          <Image
            src={"/house.jpg"} 
            width={1000}
            height={600}
            alt="House"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

     
      <section id="about" className="bg-[#f2f1ee] py-20 text-center">
        <h2 className="text-sm font-bold text-gray-600">ABOUT US</h2>
        <p className="text-2xl font-semibold text-gray-800 max-w-2xl mx-auto mt-4">
          Sarami Immo has been renting and buying homes for more than 20 years. <br />
          We are proud to be one of the top realty companies in our city.
        </p>
      </section>

<section id="contact" className="bg-[#1e1e1e] text-white py-20 px-20">
 
  <h2 className="text-sm font-bold text-gray-400 text-center">CONTACT US</h2>

  
  <div className="flex justify-center space-x-6 mt-6">
    <Image src="/house1.jpg" width={350} height={230} alt="House 1" className="rounded-lg shadow-lg" />
    <Image src="/house2.jpg" width={350} height={230} alt="House 2" className="rounded-lg shadow-lg" />
    <Image src="/house3.jpg" width={350} height={230} alt="House 3" className="rounded-lg shadow-lg" />
  </div>

 
  <div className="flex justify-between items-center mt-12">
   
    <h3 className="text-2xl font-bold text-white tracking-wide w-1/3">GET IN TOUCH</h3>

   
    <div className="text-center text-gray-300 w-1/3">
      <h4 className="font-bold text-white">Main Office</h4>
      <p className="text-gray-400">123 downtown. <br /> Oran, Algeria.</p>
    </div>

    
    <div className="w-1/3 text-right">
      <p className="text-gray-400"><span className="font-bold text-white">Tel:</span> (123) 456-7890</p>
      <p className="text-gray-400"><span className="font-bold text-white">Email:</span> hello@saramiimmo.com</p>
      <p className="text-gray-400"><span className="font-bold text-white">Social:</span> @saramiimmo</p>

      
      <div className="flex justify-end space-x-4 mt-4">
        <a href="#"><Image src="/facebook.png" width={25} height={25} alt="Facebook" /></a>
        <a href="#"><Image src="/twitter.png" width={25} height={25} alt="Twitter" /></a>
        <a href="#"><Image src="/instagram.png" width={25} height={25} alt="Instagram" /></a>
      </div>
    </div>
  </div>
</section>



    </div>
  );
}

export default Header;
