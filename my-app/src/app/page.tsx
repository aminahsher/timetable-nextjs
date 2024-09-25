import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
  <h1 className="text-4xl font-bold text-blue-600 mb-4">
    Time Table App
  </h1>
  <h3 className="text-2xl text-gray-700">
    Developed by using <span className="text-blue-500">Typescript & tailwind</span>
  </h3>
  <Link
    href="/timetable"
    className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow hover:bg-blue-500 transition-colors duration-300"
  >
    Click to view your timetable
  </Link>
</div>

  );
}
