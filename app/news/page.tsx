interface NewsArticle {
  title: string;
  subtitle: string;
  content: string;
}

const sampleArticles: NewsArticle[] = [
  {
    title: "Article 1",
    subtitle: "Subtitle 1",
    content: "Content 1",
  },
  {
    title: "Article 2",
    subtitle: "Subtitle 2",
    content: "Content 2",
  },
  {
    title: "Article 3",
    subtitle: "Subtitle 3",
    content: "Content 3",
  },
];

export default function News() {
  return (
    <div className="min-h-screen">
      <h1 className="p-5 text-4xl text-bold justify-center flex">News</h1>
      <div className="min-h-screen flex flex-col items-center">
        {sampleArticles.map((article) => (
          <div className="w-1/2 p-5 border border-gray-300 rounded-lg m-5">
            <h2 className="text-2xl text-bold">{article.title}</h2>
            <h3 className="text-lg">{article.subtitle}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}