import logo1 from '../assets/Frame/Frame.png'
import logo2 from '../assets/Frame/Frame (1).png'
import logo3 from '../assets/Frame/Frame (2).png'
import logo4 from '../assets/Frame/Frame (3).png'
import logo5 from '../assets/Frame/Frame (4).png'

const logos = [
  { src: logo1, alt: 'Logoipsum' },
  { src: logo2, alt: 'Logoipsum' },
  { src: logo3, alt: 'Logoipsum' },
  { src: logo4, alt: 'Logoipsum' },
  { src: logo5, alt: 'Logoipsum' },
]

function LogoCloud() {
  return (
    <section aria-label="Trusted partners" className="bg-shuttle-gray-50  py-20">
      <div className="mx-auto flex  w-full max-w-[1198px] flex-wrap items-center justify-center gap-x-18  md:justify-between">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-8 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  )
}

export default LogoCloud