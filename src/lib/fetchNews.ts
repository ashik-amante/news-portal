

export const fetchNews = async () => {

    try {
        const res = await fetch(`http://localhost:3000/news.json`)
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