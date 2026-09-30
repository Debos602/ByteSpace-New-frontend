import  HeroSection from '../components/HeroSection'
import LogoCloud from '../components/LogoCloud'
import CourseCategories from '../components/CourseCategories'
import Courses from './Courses'




function Home() {
  return (
    <main>
      <HeroSection />
      <LogoCloud />
      <Courses />
      <CourseCategories />
    </main>
  )
}

export default Home