import Image from 'next/image'
import { links } from '../../ui/links'
import { socials } from '../../ui/socials'


const index = () => {
  return (
    <footer className='bg-black'>
      {/* Container */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* Footer Flex Container */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* Menu & Logo Container */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* Logo */}
            <div className="h-8">
              <Image src="/images/logo.svg" alt="" width={192} height={32} className="w-44 md:ml-3" />
            </div>
            {/* Menu Container */}
            <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* Item */}
              {links.map((link) => (
                <div key={link.name} className="h-10 group">
                  <a href={link.path}>{link.name}</a>
                  <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Social & Copy Container */}
          <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
            {/* icons Container */}
            <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0">
              {/* Icon */}
              {socials.map(social => (
              <div key={social.name} className="h8 group">
                <a href={social.path}>
                  <Image
                   src={`/images/${social.name}`} 
                   alt={social.name} 
                   className='h-6'
                   width={24} height={24}
                   />
                </a>
              </div>
              ))}
             
            </div>

            {/* Copy */}
            <div className="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default index