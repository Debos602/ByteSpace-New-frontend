import { useState } from 'react';
import image from "../assets/courses-image/Frame.png";
import image2 from "../assets/courses-image/Frame (1).png";
import image3 from "../assets/courses-image/Frame (2).png";
import image4 from "../assets/courses-image/Frame (3).png";
import image5 from "../assets/courses-image/Frame (4).png";
import image6 from "../assets/courses-image/Frame (5).png";

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
    <span className="rounded bg-gray-100/90 px-2 py-1 text-[9px] text-gray-600">
      {children}
    </span>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-3">
      <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-gray-200">
        {course.image && (
          <img src={course.image} alt={course.title} className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-x-2 bottom-2 flex gap-1">
          <Badge>{course.lessons} Lessons</Badge>
          <Badge>{course.duration}</Badge>
          <Badge>{course.comments} Comments</Badge>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-gray-900">{course.title}</h3>
        <span className="shrink-0 text-xs text-gray-500">{course.rating} ☆</span>
      </div>
      <p className="mt-1 text-[10px] text-persian-800">by {course.author}</p>

      <div className="mt-3 flex items-center gap-2">
        <span className="rounded bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
          {course.level}
        </span>
        <div className="flex items-center">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="-ml-1.5 h-5 w-5 rounded-full border-2 border-white bg-gray-300 first:ml-0"
            />
          ))}
          <span className="-ml-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-electric-lime-400 px-1 text-[8px] font-semibold">
            35+
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm font-bold text-persian-800">
        ${course.price}
        <span className="ml-1 text-[9px] font-normal text-gray-400">/lifetime</span>
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