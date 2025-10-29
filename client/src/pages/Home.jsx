
import { Link, useNavigate } from 'react-router-dom';
import Banner from '../components/Home/Banner'
import Feature from '../components/Home/feature';
import React, { useState } from 'react';

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMenuHandler = () => {
    setIsMobileMenuOpen(false);


  };
  const navigate = useNavigate()

  const handelSignUp = ()=>{
    navigate('/login?state=SignUp')
  }

  const handelStart = ()=>{
    navigate('/app?state=registered')
  }

  return (
    <div>
      <Banner/>
      <section className="flex flex-col items-center h-[97vh] text-white text-sm pb-20 bg-gradient-to-br from-black to-gray-700">
      
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur border-b border-slate-800">
        <Link to='/' className='font-bold text-2xl' >
          Rumi<span className=' text-purple-700'>.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <a href='#' className="hover:text-slate-300 transition">
            Home
          </a>
          <a href="#feature" className="hover:text-slate-300 transition">
            Feature
          </a>
          <a href="#stories" className="hover:text-slate-300 transition">
            Stories
          </a>
          <a href="#contact" className="hover:text-slate-300 transition">
            Contact
          </a>
        </div>

        <div className="hidden md:block space-x-3">
          <button className="active:scale-95 hover:bg-indigo-600/20 transition px-4 py-2 border border-indigo-600 rounded-md" onClick={handelSignUp}>
            Sign in
          </button>
          <button className="px-6 py-2 bg-indigo-600 active:scale-95 hover:bg-indigo-700 transition rounded-md" onClick={handelStart}>
            Get started
          </button>
        </div>
        <button
          id="open-menu"
          className="md:hidden active:scale-90 transition"
          onClick={openMenuHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu-icon lucide-menu"
          >
            <path d="M4 5h16" />
            <path d="M4 12h16" />
            <path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav Links */}
      <div
        className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <a href="#" onClick={closeMenuHandler}>
          Home
        </a>
        <a href="#feature" onClick={closeMenuHandler}>
          Feature
        </a>
        <a href="#stories" onClick={closeMenuHandler}>
          Stories
        </a>
        <a href="#contact" onClick={closeMenuHandler}>
          Contact
        </a>
        <button
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-slate-100 hover:bg-slate-200 transition text-black rounded-md flex"
          onClick={closeMenuHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x-icon lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <a
        href="#"
        className="flex items-center gap-2 border border-slate-700 rounded-full p-1 pr-3 text-sm mt-20"
      >
        <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full">
          NEW
        </span>
        <p className="flex items-center gap-2">
          <span>Try 30 days free trial option</span>
          <svg
            className="mt-px"
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 4 3.5L1 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </a>
      <h1 className="text-center text-[40px] leading-[48px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-3xl">
        Land your dream job with AI powered resume
      </h1>
      <p className="text-center text-base max-w-md mt-2">
       Build your dream resume in minutes.
       <br />
AI-powered. Fully customizable. Ready to download.
      </p>
      <div className="bg-white/10 max-w-2xl w-full rounded-xl p-4 mt-10 border border-indigo-600/70">
        <textarea
          className="bg-transparent outline-none text-gray-300 resize-none w-full"
          rows="4"
          placeholder="Describe your field"
        ></textarea>
        <button className="ml-auto flex items-center gap-2 bg-gradient-to-r from-[#CB52D4] to-indigo-600 rounded-md px-4 py-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              clipPath="url(#a)"
              stroke="#F8FAFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8.28 12.916a1.67 1.67 0 0 0-1.197-1.197L1.971 10.4a.417.417 0 0 1 0-.801l5.112-1.32a1.67 1.67 0 0 0 1.198-1.196L9.599 1.97a.417.417 0 0 1 .803 0l1.317 5.113a1.67 1.67 0 0 0 1.198 1.197l5.112 1.318a.417.417 0 0 1 0 .803l-5.112 1.318a1.67 1.67 0 0 0-1.198 1.197l-1.318 5.113a.417.417 0 0 1-.803 0zM16.668 2.5v3.333m1.665-1.666H15m-11.668 10v1.667M4.167 15H2.5" />
            </g>
          </svg>
          Create with ai
        </button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 mx-auto mt-16">
        <img
          className="max-w-28 md:max-w-32"
          src="https://saasly.prebuiltui.com/assets/companies-logo/framer.svg"
          alt=""
        />
        <img
          className="max-w-28 md:max-w-32"
          src="https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg"
          alt=""
        />
        <img
          className="max-w-28 md:max-w-32"
          src="https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg"
          alt=""
        />
        <img
          className="max-w-28 md:max-w-32"
          src="https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg"
          alt=""
        />
        <img
          className="max-w-28 md:max-w-32"
          src="https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg"
          alt=""
        />
      </div>
    </section>
    <Feature/>
    </div>
  )
}

export default Home

