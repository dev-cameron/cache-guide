import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <h1 className="text-neutral text-xl">Browser Caching 101</h1>
      <p className="text-neutral-contrast"> Why do we cache? Mainly to reduce the number of requests to the server, or to reduce the time it takes to get a response from the server
      </p>
  
    </div>
  )
}