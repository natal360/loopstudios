/* eslint-disable @next/next/no-img-element */
import s from './creation.module.css'
import { creationItems1, creationItems2 } from "./creation-item"

const index = () => {
  return (
    <section>
      {/* Creations Container */}
      <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
        {/* Creation Header */}
        <div className="flex justify-center mb-20 md:justify-between">
          <h2 className="text-4xl text-clip uppercase md:text-left md:text-5xl">
            Our Creation
          </h2>

          <button className="hidden md:block btn">
            See All
          </button>
        </div>

        {/* Next Image hidden が使えなかったため通常の img 使用 */}
        {/* Item Container 1 */}
        <div className={s['item-container']}>
          {creationItems1.map(item => (
            <div key={item.title} className={`group ${s.item}`}>
              {/* Desktop Image */}
              <img
                src={`/images/desktop/image-${item.name}.jpg`} alt={item.name}
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* Mobile Image */}
              <img
                src={`/images/mobile/image-${item.name}.jpg`} alt={item.name}
                className='w-full md:hidden '
              />
              {/* Item Gradient  group : css modules 認識できないので global で記述 */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>

        {/* Item Container 2 */}
        <div className={`mt-10 ${s['item-container']}`}>
        {creationItems2.map(item => (
            <div key={item.title} className={`group ${s.item}`}>
              {/* Desktop Image */}
              <img
                src={`/images/desktop/image-${item.name}.jpg`} alt={item.name}
                className='hidden w-full duration-200 md:block group-hover:scale-110'
              />
              {/* Mobile Image */}
              <img
                src={`/images/mobile/image-${item.name}.jpg`} alt={item.name}
                className='w-full md:hidden '
              />
              {/* Item Gradient  group : css modules 認識できないので global で記述 */}
              <div className="item-gradient"></div>
              {/* Item Text */}
              <h5>{item.title}</h5>
            </div>
          ))}
        </div>
        
        {/* Bottom Button Container */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn w-full md:hidden">See All</button>
        </div>
      </div>
    </section>
  )
}

export default index