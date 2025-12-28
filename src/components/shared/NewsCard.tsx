import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { NewsProps } from '@/types/news'

const NewsCard = ({news} : NewsProps) => {
    return (
        <div className='border p-4 rounded-md shadow-md'>
            <Link href={'/'}>
                <Image src={news.imageUrl} alt='news' width={400} height={400} priority></Image>
            </Link>
            <div className='mt-2 space-y-3'>
                <h1 className='textxl font-bold'>{news.title.substring(0, 70)}..</h1>
                <p>{news.description.substring(0, 100)}...</p>
                <Link href={`/news/${news._id}`}>
                    <Button>Read More</Button>
                </Link>
            </div>
        </div>
    )
}

export default NewsCard