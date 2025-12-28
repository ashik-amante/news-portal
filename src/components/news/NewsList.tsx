"use client"

import { fetchNews } from "@/lib/fetchNews"
import { News } from "@/types/news"
import { useEffect, useState } from "react"
import NewsCard from "../shared/NewsCard"
import SearchBar from "./SearchBar"
import CategoryFilter from "./CategoryFilter"

const NewsList = () => {
    const [news, setNews] = useState<News[]>([])
    const [search, setSearch] = useState<string>('')
    const [category, setCategory] = useState<string>('')


    useEffect(() => {
        const getNews = async () => {
            const data = await fetchNews()
            const filteredData = data.filter((item: News) => {
                const matchSearch = search === '' ? true : item.title.toLowerCase().includes(search.toLowerCase())

                const filteredCategory = category === '' ? true : item.categories.includes(category)

                return matchSearch && filteredCategory
            })

            setNews(filteredData)
        }
        getNews()
    }, [category, search])

    console.log(news);
    console.log(search);
    console.log(category);

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5">
                <SearchBar onSearch={setSearch}></SearchBar>

                <CategoryFilter onCategory={setCategory}></CategoryFilter>
            </div>
            {/*news cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {
                    news.map((news: News) => (
                        <NewsCard key={news._id} news={news}></NewsCard>
                    ))
                }
            </div>
        </div>
    )
}

export default NewsList