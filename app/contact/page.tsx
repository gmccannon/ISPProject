export default function Contact() {
  return (
    <div className="min-h-screen">
      <h1 className="p-5 text-4xl text-bold justify-center flex">Contact Me</h1>
      <div className="min-h-screen flex flex-col items-center">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 w-full max-w-md p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full max-w-md p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="text"
          placeholder="Credit Card number"
          className="mb-4 w-full max-w-md p-2 border border-gray-300 rounded text-black"
        />
        <input
          type="text"
          placeholder="Social Security number"
          className="mb-4 w-full max-w-md p-2 border border-gray-300 rounded text-black"
        />
        <button className="p-2 bg-blue-500 text-white rounded">Submit</button>
      </div>
    </div>
  );
}