import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-neutral-900 text-zinc-300 p-8">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-4 text-yellow-300">404</h1>
        <h2 className="text-2xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-zinc-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-yellow-300 text-neutral-900 px-6 py-3 rounded-lg font-medium hover:bg-yellow-400 transition-colors"
        >
          <ArrowLeft />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
