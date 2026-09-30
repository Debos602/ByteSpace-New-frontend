

const categories = [
  { name: 'Design', Icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M24.36 17.2633L26.715 14.9083L21.09 9.28334L18.735 11.6383L12.525 5.44334C11.355 4.27334 9.45 4.27334 8.28 5.44334L5.43 8.29334C4.26 9.46334 4.26 11.3683 5.43 12.5383L11.625 18.7333L4.5 25.8733V31.4983H10.125L17.265 24.3583L23.46 30.5533C24.885 31.9783 26.805 31.4533 27.705 30.5533L30.555 27.7033C31.725 26.5333 31.725 24.6283 30.555 23.4583L24.36 17.2633ZM13.77 16.6033L7.56 10.4083L10.395 7.55834L12.3 9.46334L10.53 11.2483L12.645 13.3633L14.43 11.5783L16.605 13.7533L13.77 16.6033ZM25.59 28.4383L19.395 22.2433L22.245 19.3933L24.42 21.5683L22.635 23.3533L24.75 25.4683L26.535 23.6833L28.44 25.5883L25.59 28.4383Z" fill="#242528"/>
  <path d="M31.065 10.5583C31.65 9.97334 31.65 9.02834 31.065 8.44334L27.555 4.93334C26.85 4.22834 25.875 4.49834 25.44 4.93334L22.695 7.67834L28.32 13.3033L31.065 10.5583Z" fill="#242528"/>
  <path d="M31.065 10.5583C31.65 9.97334 31.65 9.02834 31.065 8.44334L27.555 4.93334C26.85 4.22834 25.875 4.49834 25.44 4.93334L22.695 7.67834L28.32 13.3033L31.065 10.5583Z" fill="#242528"/>
</svg> },
  { name: 'Development', Icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M10.5 7.5H25.5V10.5H28.5V4.5C28.5 2.85 27.15 1.515 25.5 1.515L10.5 1.5C8.85 1.5 7.5 2.85 7.5 4.5V10.5H10.5V7.5ZM23.115 24.885L30 18L23.115 11.115L21 13.245L25.755 18L21 22.755L23.115 24.885ZM15 22.755L10.245 18L15 13.245L12.885 11.115L6 18L12.885 24.885L15 22.755ZM25.5 28.5H10.5V25.5H7.5V31.5C7.5 33.15 8.85 34.5 10.5 34.5H25.5C27.15 34.5 28.5 33.15 28.5 31.5V25.5H25.5V28.5Z" fill="#242528"/>
</svg> },
  { name: 'IT & Software', Icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M30 27C31.65 27 32.985 25.65 32.985 24L33 9C33 7.35 31.65 6 30 6H6C4.35 6 3 7.35 3 9V24C3 25.65 4.35 27 6 27H0L0 30H36V27H30ZM6 9H30V24H6V9Z" fill="#242528"/>
</svg> },
  { name: 'Business', Icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 30 27" fill="none">
  <path d="M15 6V3C15 1.35 13.65 0 12 0L3 0C1.35 0 0 1.35 0 3L0 24C0 25.65 1.35 27 3 27H27C28.65 27 30 25.65 30 24V9C30 7.35 28.65 6 27 6H15ZM6 24H3V21H6V24ZM6 18H3V15H6V18ZM6 12H3V9H6V12ZM6 6H3V3H6V6ZM12 24H9V21H12V24ZM12 18H9V15H12V18ZM12 12H9V9H12V12ZM12 6H9V3H12V6ZM25.5 24H15V21H18V18H15V15H18V12H15V9H25.5C26.325 9 27 9.675 27 10.5V22.5C27 23.325 26.325 24 25.5 24ZM24 12H21V15H24V12ZM24 18H21V21H24V18Z" fill="#242528"/>
</svg> },
  { name: 'Marketing', Icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M16.5 21H13.5C13.5 13.545 19.545 7.5 27 7.5V10.5C21.195 10.5 16.5 15.195 16.5 21ZM27 16.5V13.5C22.86 13.5 19.5 16.86 19.5 21H22.5C22.5 18.51 24.51 16.5 27 16.5ZM10.5 6C10.5 4.335 9.165 3 7.5 3C5.835 3 4.5 4.335 4.5 6C4.5 7.665 5.835 9 7.5 9C9.165 9 10.5 7.665 10.5 6ZM17.175 6.75H14.175C13.815 8.88 11.985 10.5 9.75 10.5H5.25C4.005 10.5 3 11.505 3 12.75V16.5H12V13.11C14.79 12.225 16.875 9.765 17.175 6.75ZM28.5 25.5C30.165 25.5 31.5 24.165 31.5 22.5C31.5 20.835 30.165 19.5 28.5 19.5C26.835 19.5 25.5 20.835 25.5 22.5C25.5 24.165 26.835 25.5 28.5 25.5ZM30.75 27H26.25C24.015 27 22.185 25.38 21.825 23.25H18.825C19.125 26.265 21.21 28.725 24 29.61V33H33V29.25C33 28.005 31.995 27 30.75 27Z" fill="#242528"/>
</svg> },
  { name: 'Photography', Icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M30 7.5H25.245L22.5 4.5H13.5L10.755 7.5H6C4.35 7.5 3 8.85 3 10.5V28.5C3 30.15 4.35 31.5 6 31.5H30C31.65 31.5 33 30.15 33 28.5V10.5C33 8.85 31.65 7.5 30 7.5ZM30 28.5H6V10.5H12.075L14.82 7.5H21.18L23.925 10.5H30V28.5Z" fill="#242528"/>
  <path d="M18 19.5C19.6569 19.5 21 18.1569 21 16.5C21 14.8431 19.6569 13.5 18 13.5C16.3431 13.5 15 14.8431 15 16.5C15 18.1569 16.3431 19.5 18 19.5Z" fill="#242528"/>
  <path d="M22.17 21.87C20.895 21.315 19.485 21 18 21C16.515 21 15.105 21.315 13.83 21.87C12.72 22.35 12 23.43 12 24.645V25.5H24V24.645C24 23.43 23.28 22.35 22.17 21.87Z" fill="#242528"/>
</svg> },
]

export default function CourseCategories() {
  return (
    <section className="bg-white pt-[72px] pb-[120px]">
      <div className="text-center mx-auto max-w-[1198px] ">
       <h2 className="text-center  text-[36px] font-semibold leading-[120%] tracking-[-0.36px] text-[#040819]">
            Explore Diverse Learning Paths at Bytespace
        </h2>
       <p className="mx-auto mt-4 max-w-[917px] text-center text-[18px] font-normal leading-[160%] text-[#82868E]">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

       <div className="mt-[68px] grid grid-cols-6 gap-10 ">
            {categories.map(({ name, Icon }) => (
                <div
                key={name}
                className="flex flex-col items-center rounded-[24px] border border-[#CED0D3] py-[36px]"
                >
                <span className="flex justify-center items-center gap-2 p-4 rounded-[40px] bg-electric-lime-400 text-[#151515]">
                    {Icon}
                </span>
                <span className="mt-[12px] text-[20px] font-medium leading-[120%] text-[#242528]">
                    {name}
                </span>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}