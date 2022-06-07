import Image from 'next/image'
import s from './menu.module.css'
import { links } from '../../ui/links'

const Menu = () => {

  const navToggle = () => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu')
    // 切り替える場合 toggle  ✖ add
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
  }

  return (
    // Hero Section 
    <section className={s['hero-img']}>
      {/* Hero Container */}
      <div className="container max-w-6xl mx-auto px-6 py-12">
        {/* Menu/Logo Container */}
        <nav className="flex items-center justify-between font-bold text-white">
          {/* Logo */}
          <Image src="/images/logo.svg" alt="" width={192} height={32} />
          {/* Menu */}
          <div className="hidden h-10 font-alata
                          md:flex md:space-x-8">
            {links.map((link) => (
              <div key={link.name} className="group">
                <a href={link.path}>{link.name}</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            ))}
          </div>
          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              id='menu-btn'
              type='button'
              className="z-40 block hamburger md:hidden focus:outline-none"
              onClick={navToggle}
              >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div id="menu" className="absolute top-0 bottom-0 left-0 hidden flex-col self-end  w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black">
          {links.map(link => (
            <a key={link.name} href={link.path} className='hover:text-pink-500'>{link.name}</a>
          ))}
        </div>

        <div className={s['hero-text']}>
          Impressive Experiences That Deliver
        </div>
      </div>
    </section>

  )
}

export default Menu