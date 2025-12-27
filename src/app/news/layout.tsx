import Link from 'next/link'
import React from 'react'

const NewsLayouts = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <h1 className='text-xl font-bold mb-4'>Latest News Page</h1>

      <nav className='space-x-4 mb-4'>
        <Link href='/news/sports'>Sports</Link>
        <Link href='/news/health'>  Health</Link>
      </nav>

      <div className='flex gap-3'>
        <div className='md:w-4/5 h-96 bg-gray-100 flex items-center justify-center '>
         {children}
        </div>

        <div className='bg-purple-400 h-96 md:w-1/5 flex justify-center items-center'>
          sidebar
        </div>
      </div>
    </div>
  )
}

export default NewsLayouts