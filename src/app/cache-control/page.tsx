import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <h1 className="text-neutral text-xl">The Cache-Control header</h1>
      <p className="text-neutral-contrast"> The <strong>Cache-Control</strong> header field is used to store instructions (called <strong>directives</strong>) 
        that inform the cache on what rules and guidelines to follow when caching data. 
      </p>
      <p className="text-neutral-contrast">Cache in this context can be either a private cache (the client’s browser) or a 
      public/shared cache such as a Proxy server or CDN.</p>
      <ul className="ml-4 list-disc">
        <li className="text-neutral-contrast"><strong>Note: </strong>Cache-Control is a multi-value header, meaning it can accept multiple, comma-separated directives.</li>
      </ul>
      <p className="text-neutral-contrast">
         See all directives below <a className="text-accent" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control">(snarfed from MDN)</a>
      </p>
      <div className="px-4">
        <table className="table-auto w-full">
          <thead className="bg-neutral-accent text-neutral-contrast rounded-lg overflow-hidden">
            <tr>
              <th className="px-4 py-2" >Request</th>
              <th className="px-4 py-2" >Response</th>
            </tr>
          </thead>
          <tbody className="text-neutral-contrast">
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">
              <Link href="/cache-control/max-age">
                max-age
                </Link>
              </td>
              <td className="px-4 py-2 border border-neutral-accent">
                <Link href="/cache-control/max-age">
                max-age
                </Link>
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">max-stale</td>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">min-fresh</td>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">s-maxage</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">no-cache</td>
              <td className="px-4 py-2 border border-neutral-accent">no-cache</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">no-store</td>
              <td className="px-4 py-2 border border-neutral-accent">no-store</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">no-transform</td>
              <td className="px-4 py-2 border border-neutral-accent">no-transform</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">only-if-cached</td>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">must-revalidate</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">proxy-revalidate</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">must-understand</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">private</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">public</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">immutable</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">-</td>
              <td className="px-4 py-2 border border-neutral-accent">stale-while-revalidate</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-neutral-accent">stale-if-error</td>
              <td className="px-4 py-2 border border-neutral-accent">stale-if-error</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}