"use client"

import Image from 'next/image'

export default function Home() {
  return (
    <div className='m-10 '>
      <section className='mx-20 mb-16'>
      <Image
        src="/images/profile.png"
        width={400}
        height={400}
        alt="Picture of the author"
        className='rounded-3xl border- border-gray-900 border-4 m-auto'
    />
      <h1 className='text-center text-5xl'>Hello, my name is <span className='text-7xl underline underline-offset-3 decoration-black text-gray-200'>Hakim</span></h1>
      </section>

      <section className='mb-10'>
        <h1 className='text-center text-2xl '>Biography</h1>
        <p className='text-center text-balance mt-2 mx-72 sm:mx-0'>Muhammad Hakim bin Md Nazri, a 21-year-old Malaysian student at the International Islamic University Malaysia, is diving deep into the world of Computer Science. Beyond codes and algorithms, Hakim's curiosity extends to cybersecurity, physics, economics, and psychology. Balancing academia with diverse interests, he immerses himself in novels, grooves to music, and explores the realms of gaming and anime. Hakim's journey is a dynamic blend of tech exploration and creative downtime, reflecting a holistic approach to learning. With a passion for both the logical intricacies of computer science and the imaginative escapes of hobbies, Hakim embodies the spirit of a modern, multifaceted learner navigating the diverse landscapes of knowledge and leisure.</p>
      </section>

      <section className='text-center pb-5'>
      <span className='text-xl font-medium'>Download my resume here</span> <br></br>
      <a href="/file/resume.txt" download>
        <button className='p-2 rounded-xl bg-gray-900 border border-white hover:bg-gray-400 m-2 active:bg-gray-600'>Download here</button>
      </a>
      </section>
    </div>
  )
}