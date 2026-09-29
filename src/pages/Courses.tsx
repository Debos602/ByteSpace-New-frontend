import { useState } from 'react';
import image from "../assets/courses-image/Frame.png";
import image2 from "../assets/courses-image/Frame (1).png";
import image3 from "../assets/courses-image/Frame (2).png";
import image4 from "../assets/courses-image/Frame (3).png";
import image5 from "../assets/courses-image/Frame (4).png";
import image6 from "../assets/courses-image/Frame (5).png";
import enrollImage from "../assets/Ellipse.png"
import enrollImage1 from "../assets/Ellipse (1).png"
import enrollImage2 from "../assets/Ellipse (2).png"
import enrollImage3 from "../assets/Ellipse (3).png"


const categories = [
  'Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation',
  'Social Media', 'UX/UX Design', 'Creative Marketing', 'Digital Illustration',
  'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design',
  'Photography', 'Productivity', 'Web Development', 'Date Science', 'Cooking',
]

type Course = {
  id: number
  title: string
  image: string
  lessons: number
  duration: string
  comments: number
  rating: number
  author: string
  level: string
  price: number
}

const courses: Course[] = [
  { id: 1, title: 'Learn Figma from Basic', image: image, lessons: 17, duration: '2 hours 10 mins', comments: 84, rating: 4.5, author: 'punkpad studio', level: 'Beginner', price: 25 },
  { id: 2, title: 'Build Digital Asset', image: image2, lessons: 17, duration: '2 hours 10 mins', comments: 84, rating: 4.5, author: 'punkpad studio', level: 'Beginner', price: 25 },
  { id: 3, title: 'the Power of Big Data', image: image3, lessons: 17, duration: '2 hours 10 mins', comments: 84, rating: 4.5, author: 'punkpad studio', level: 'Beginner', price: 25 },
  { id: 4, title: 'Balancing Productivity and Life', image: image4, lessons: 17, duration: '2 hours 10 mins', comments: 84, rating: 4.5, author: 'punkpad studio', level: 'Beginner', price: 25 },
  { id: 5, title: 'Mastering Money Management', image: image5, lessons: 17, duration: '2 hours 10 mins', comments: 84, rating: 4.5, author: 'punkpad studio', level: 'Beginner', price: 25 },
  { id: 6, title: 'From Idea to Startup Success', image: image6, lessons: 17, duration: '2 hours 10 mins', comments: 84, rating: 4.5, author: 'punkpad studio', level: 'Beginner', price: 25 },
]

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center justify-center whitespace-nowrap rounded-3xl bg-[#F6F6F6]/60 px-3 py-1.5 text-xs font-medium text-[#4F4F4F] backdrop-blur-[4px]">
      {children}
    </span>
  );
}
function CourseCard({ course }: { course: Course }) {
  const avatars = [enrollImage, enrollImage1, enrollImage2, enrollImage3];
  return (
    <article className="rounded-3xl border border-[#CED0D3] bg-white p-4">
      <div className="relative aspect-[7/4] overflow-hidden rounded-xl bg-[#443131]">
  {course.image && (
    <img
      src={course.image}
      alt={course.title}
      className="absolute inset-0 h-full w-full object-cover"
    />
  )}
      <div className="absolute inset-x-[13px] bottom-[19px] flex items-center justify-between gap-3">
        <Badge>{course.lessons} Lessons</Badge>
        <Badge>{course.duration}</Badge>
        <Badge>{course.comments} Comments</Badge>
      </div>
    </div>

      <div className="mt-[20px] flex items-start justify-between gap-2">
       <h3 className="text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-black/950">
          {course.title}
        </h3>
       <span className="shrink-0 font-[Satoshi] text-[18px] font-normal leading-[160%] text-[#4F4F4F] flex items-center justify-center">
          {course.rating} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.43 9.61158L12.96 4.77158C12.67 3.82158 11.33 3.82158 11.05 4.77158L9.56999 9.61158H5.11999C4.14999 9.61158 3.74999 10.8616 4.53999 11.4216L8.17999 14.0216L6.74999 18.6316C6.45999 19.5616 7.53999 20.3116 8.30999 19.7216L12 16.9216L15.69 19.7316C16.46 20.3216 17.54 19.5716 17.25 18.6416L15.82 14.0316L19.46 11.4316C20.25 10.8616 19.85 9.62158 18.88 9.62158H14.43V9.61158Z" fill="#CED0D3"/>
      </svg>
        </span>
      </div>
     <p className="mt-1 text-[12px] font-normal leading-[160%] ">
        by <span className="text-[#003BE2]">{course.author}</span>
      </p>

      <div className="mt-3 flex items-center gap-1">
        <span className="bg-gray-100 rounded-[24px] px-4 py-[9px] text-[10px] text-gray-600 flex justify-center items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
        <path d="M10 0H12.5V13.3333H10V0ZM0 8.33333H2.5V13.3333H0V8.33333ZM5 4.16667H7.5V13.3333H5V4.16667Z" fill="#4B4C53"/>
      </svg>
          {course.level}
        </span>
        <div className="flex items-center">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`student ${i + 1}`}
              className="-ml-1.5 h-[32px] w-[32px] rounded-full border-2 border-white object-cover first:ml-0"
            />
          ))}
          <span className="-ml-1.5 flex h-[32px] w-[32px]  items-center justify-center rounded-full border-2 border-white bg-electric-lime-400 px-1 text-[8px] text-s font-semibold">
            26+
          </span>
        </div>
      </div>

      <p className="mt-4 font-[Poppins] text-[20px] font-semibold leading-[120%] tracking-[-0.2px] text-[#003BE2]">
        ${course.price}
        <span className="ml-1 text-[12px] font-normal leading-[160%] text-[#4F4F4F]">/lifetime</span>
      </p>
    </article>
  )
}

function Courses() {
  const [active, setActive] = useState('Featured')

  return (
    <main className="bg-white py-18">
      <section className="mx-auto max-w-[1198px] text-center">
        <h1 className="text-[44px] font-semibold leading-[1.2] tracking-[-0.44px] text-[#040819] md:text-4xl">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h1>
        <p className="mx-auto mt-4 max-w-[917px] text-lg text-[#82868E]  not-italic font-normal leading-[160%]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>

        {/* Categories */}
        <div className="mx-auto mt-[42px] flex max-w-[760px] flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-3 text-[16px] transition-colors ${
                active === cat
                  ? 'bg-electric-lime-400 font-medium text-black'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
          <button type="button" className="px-2 py-1 text-[16px] text-persian-800 not-italic font-medium leading-[120%]">
            + More
          </button>
        </div>

        {/* Grid */}
        <div className="mt-[77px] grid grid-cols-1 gap-10 text-left sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Courses