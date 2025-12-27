import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { News } from "@/types/news";



export default async function Home() {

  const res = await fetch('http://localhost:3000/news.json')
const news = await res.json()

  console.log(news);

  return (
    <div className="py-12">
      <Banner></Banner>

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {
            news.slice(0, 6).map((news: News) => (
              <NewsCard key={news._id} news={news}></NewsCard>
            ))
          }
          
        </div>
      </div>

    </div>

  );
}
