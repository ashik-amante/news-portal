

export const fetchNews = async (category: string = '', search: string = '') => {

    try {
        const res = await fetch(`http://localhost:3000/news.json?category=${category}&search=${search}`)
        if (!res.ok) {
            throw new Error('Failed to fetch news')
        }

        const news = await res.json()
        return news
    } catch (error) {
        console.log('Error fetching data',error)
        return []
    }
}