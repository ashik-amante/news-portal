import Image from 'next/image'
import React from 'react'

import bannerImage from "@/assets/news.jpg"
import { Button } from '../ui/button'

const Banner = () => {
    return (
        <div className='bg-slate-100'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-10'>
                <div>
                    <Image src={bannerImage} alt='news'></Image>
                </div>

                <div className='space-y-6 flex flex-col justify-center ml-3'>
                    <h1 className='text-gray-400'>Technology</h1>
                    <h1 className='text-2xl font-bold '>OpenAi is growing fast and burning through piles of money</h1>
                    <p>Get the latest news from around the world of technology and gadgets in one place - your one-stop destination for the latest news on technology and gadgets. </p>
                    <p className='mt-2'>Chatgpt is growing fast and burning through piles of money </p>
                    <Button>Read More</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner