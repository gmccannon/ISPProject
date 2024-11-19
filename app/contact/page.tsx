import { Input } from "@nextui-org/react";

export default function Contact() {
  return (
    <div className = "min-h-screen">
      <h1 className = "p-5 text-2xl justify-center flex">Contact Me</h1>
      <div className=" min-h-screen flex flex-col items-center">
        <Input
          isClearable
          placeholder="Your Name"
          className="mb-4 w-full max-w-md"
        />
        <Input
          isClearable
          placeholder="Email"
          className="mb-4 w-full max-w-md"
        />
        <Input
          isClearable
          placeholder="Credit Card number"
          className="mb-4 w-full max-w-md"
        />
        <Input
          isClearable
          placeholder="Social Security number"
          className="mb-4 w-full max-w-md"
        />
        <button className="p-2 bg-blue-500 text-white rounded">Submit</button>
    </div>
    </div>
  );
}