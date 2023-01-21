import { SERVICES } from '../../content/services'
import './Services.css'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Pricing = () => {
  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div className="Services" id="services-section">
        <h3 className="SectionHeader">Services & Pricing</h3>
        <div className="flex justify-between flex-col xl:flex-row">
          <div>
            <h4 className="mx-auto font-bold text-xl text-white bg-accent-1 max-w-max p-2 rounded-sm">
              Therapeutic and sports injury massage
            </h4>
            <ul className="mx-auto max-w-max pt-4">
              {SERVICES.map((service) => {
                return (
                  <li
                    key={service.id}
                    className="flex gap-4 mb-4 text-lg relative"
                  >
                    <div className="absolute w-6 h-2 bg-accent-1 top-[19px] left-1/2"></div>
                    <div className="bg-accent-1 text-white p-2 rounded-sm">
                      {service.time}
                    </div>
                    <div className="bg-accent-1 text-white p-2 rounded-sm">
                      {service.price}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className="list-disc text-lg font-bold max-w-[450px]">
            <li>All prices include tax and are in Canadian dollars.</li>
            <li>Only cash or e-Transfer are accepted at this time.</li>
            <li>
              Questions? Please reach out to{' '}
              <a
                href="mailto:quinnbonnettrmt@outlook.com"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:underline-offset-2 focus:underline-offset-2"
              >
                quinnbonnettrmt@outlook.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Pricing
