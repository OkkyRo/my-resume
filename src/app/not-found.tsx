import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 text-center">
      <h1 className="text-8xl font-bold text-blue-500 drop-shadow-lg">404</h1>
      <p className="mt-4 text-lg text-gray-700 mb-4">
        Oops! Page not found.
      </p>

      <div className="relative mt-6 mb-6 w-full max-w-xs">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="text-orange-300 text-5xl font-bold">😅</span>
        </div>
        <p className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-300 text-gray-500 text-sm mt-8">
          The page you're looking for doesn't exist or may have been moved.
          Don't worry, you can head back to the homepage and continue exploring.
        </p>
      </div>

      <Link
        href={"/"}
        className="px-6 py-3 mt-6 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 active:bg-blue-700 transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
