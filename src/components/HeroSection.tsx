import boy from '../assets/Image (3).png'
import spiralLime from '../assets/Image.png'
import spiralWhite from '../assets/Image (1).png'
import spiralWhiteRight from '../assets/Image (2).png'
import ring from '../assets/Cone_01 2.png'
import cylinder from '../assets/Cone_01 2 (1).png'
import coneA from '../assets/Cone_01 2 (2).png'
import coneB from '../assets/Cone_01 2 (1).png'
import coneC from '../assets/Cone_01 2 (2).png'
import rectengular from '../assets/Rectangle.png'

const assets = {
  boy,
  spiralLime,
  spiralWhite,
  spiralWhiteRight,
  ring,
  cylinder,
  cone: coneA,
  coneB,
  coneC,
  rectengular,
}

const LIME = 'bg-[#C8F31D]'

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-grid pt-[49px]  text-center">
        {/* Decorations (mobile-e hide) */}
        <img src={assets.spiralLime} alt="" aria-hidden className="hidden md:block absolute left-[-20px] top-[150px] w-[150px]" />
        <img src={assets.spiralWhite} alt="" aria-hidden className="hidden md:block absolute left-[13%] top-[400px] w-[90px]" />
        <img src={assets.ring} alt="" aria-hidden className="hidden md:block absolute left-[14%] bottom-[30px] w-[180px] z-10" />
        <img src={assets.cylinder} alt="" aria-hidden className="hidden md:block absolute right-[-20px] top-[130px] w-[150px] " />
            <img
        src={spiralWhiteRight}
        alt=""
        aria-hidden
        className="absolute right-[36.59px] bottom-[21.41px] hidden w-[331.53px] brightness-0 invert md:block"
      />
        <img src={assets.cone} alt="" aria-hidden className="hidden md:block absolute right-[14%] top-[380px] w-[120px] brightness-0 invert" />
        

        {/* Text + search */}
        <div className="relative z-10 px-4">
          <h1 className="mx-auto max-w-[820px] text-4xl md:text-6xl lg:text-[64px] font-semibold leading-[1.15] text-white">
            Get Access to Hundreds of Courses Available
          </h1>
          <p className="mx-auto mt-6 max-w-[620px] text-sm text-white/80">
            Unlock your creativity, gain valuable knowledge, and grow your business
            with our wide range of courses.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex max-w-[560px] items-center gap-3"
          >
            <label className="flex h-12 flex-1 items-center gap-3 rounded-full bg-white px-5">
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path strokeLinecap="round" d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
              />
            </label>
            <button type="submit" className={`h-10 rounded-full px-6 text-sm font-medium text-black ${LIME}`}>
              Search
            </button>
          </form>
        </div>

        {/* Boy + circle + cards */}
        <div className="relative mx-auto mt-10 h-[420px] w-full max-w-[760px]">
          {/* Lime circle: hero.png-te circle thakle eta delete koro */}
          <div className={`absolute left-1/2 bottom-[-330px] h-[760px] w-[760px] -translate-x-1/2 rounded-full ${LIME}`} />

          <img src={assets.boy} alt="Smiling student with laptop" className="absolute bottom-0 left-1/2 z-10 h-[420px] w-auto -translate-x-1/2" />

          {/* UI/UX card */}
          <div className="absolute left-[2%] top-[110px] z-20 rounded-lg bg-white p-3 text-left shadow-lg">
            <p className="text-xs font-medium text-gray-900">UI/UX Design</p>
            <p className="mt-1 text-[10px] text-gray-400">200 Courses • 1000+ Students</p>
          </div>

          {/* Progress card */}
          <div className="absolute right-[0%] top-[130px] z-20 w-[220px] rounded-lg bg-white p-4 text-left shadow-lg">
            <p className="text-[10px] text-gray-500">Learning Progress</p>
            <p className="mt-1 text-3xl font-semibold text-gray-900">55%</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-gray-200">
              <div className={`h-full w-[55%] rounded-full ${LIME}`} />
            </div>
          </div>

          {/* Happy students card */}
          <div className="absolute bottom-[40px] left-[0%] z-20 rounded-lg bg-white p-3 text-left shadow-lg">
            <p className="text-xs font-medium text-gray-900">Happy Students</p>
            <p className="text-[10px] text-gray-400">4.8 (2K+)</p>
            <div className="mt-2 flex items-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="-ml-2 h-6 w-6 rounded-full border-2 border-white bg-gray-300 first:ml-0" />
              ))}
              <span className={`-ml-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-semibold ${LIME}`}>
                2K+
              </span>
            </div>
          </div>
        </div>
      </section>
    )
}

export default HeroSection