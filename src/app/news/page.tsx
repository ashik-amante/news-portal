import NewsList from '@/components/news/NewsList'

import React from 'react'

const NewsPage = () => {
  return (
    <div className='py-12'>
        <h1>Latest News</h1>

        <NewsList></NewsList>
    </div>
  )
}

export default NewsPage