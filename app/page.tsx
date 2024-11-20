import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <h1 className="text-4xl font-bold text-9xl">
            What's Poppin?
          </h1>

          <p className="pt-4 text-gray-500 text-2xl font-bold py-0.5 rounded">
            One stop shop for all your news needs. We
            provide you with the latest news from around the world.
            Stay up to date with the latest news, trends, and events
          </p>
        </div>
      </main>
    </div>
  );
}
