import { AnimationOnScroll } from 'react-animation-on-scroll'
import { graphql, useStaticQuery } from 'gatsby'

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      sanityHomepage {
        prices {
          time
          price
          _key
        }
        pricingDescription {
          _rawChildren(resolveReferences: { maxDepth: 10 })
        }
      }
    }
  `)

  return (
    <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
      <div
        className="mt-24 pt-2"
        id="services-section"
        data-testid="services-section"
      >
        <h3 className="SectionHeader">Services & Pricing</h3>
        <div className="flex justify-between flex-col xl:flex-row">
          <div>
            <h4 className="mx-auto font-bold text-xl text-white bg-accent-1 max-w-max p-2 rounded-sm">
              Therapeutic and Sports Injury Massage
            </h4>
            <ul className="mx-auto max-w-max pt-4">
              {data.sanityHomepage.prices.map(
                (service: { _key: string; time: string; price: string }) => {
                  return (
                    <li
                      key={service._key}
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
                }
              )}
            </ul>
          </div>
          <ul className="list-disc text-lg font-bold max-w-[450px]">
            {data.sanityHomepage.pricingDescription.map(
              (description: {
                _rawChildren: {
                  text: string
                  _key: string
                }[]
              }) => {
                return (
                  <li key={description._rawChildren[0]._key}>
                    {description._rawChildren[0].text}
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </AnimationOnScroll>
  )
}

export default Services
