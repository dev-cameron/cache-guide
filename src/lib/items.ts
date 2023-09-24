export type Item = {
  name: string,
  slug: string,
  description?: string;
}

export const items: { name: string, items: Item[] }[] = [
  {
    name: "Browser Cache",
    items: [
      {
        name: "Browser Caching 101",
        slug: "browser-caching-101",
        description: "A quick overview of browser caching"
      },
      {
        name: "Cache-Control",
        slug: "cache-control",
        description: "The Cache-Control header"
      },
    ]   
  },
  {
    name: "Cache-Control Directives",
    items: [
      {
        name: "max-age",
        slug: "cache-control/max-age",
        description: "max-age header"
      },
      {
        name: "max-stale",
        slug: "cache-control/max-stale",
        description: "max-stale header"
      },
      {
        name: "min-fresh",
        slug: "cache-control/min-fresh",
        description: "min-fresh header"
      },
      {
        name: "s-maxage",
        slug: "cache-control/s-maxage",
        description: "s-maxage header"
      },
      {
        name: "no-cache",
        slug: "cache-control/no-cache",
        description: "no-cache header"
      },
      {
        name: "no-store",
        slug: "cache-control/no-store",
        description: "no-store header"
      },
      {
        name: "no-transform",
        slug: "cache-control/no-transform",
        description: "no-transform header"
      },
      {
        name: "only-if-cached",
        slug: "cache-control/only-if-cached",
        description: "only-if-cached header"
      },
      {
        name: "must-revalidate",
        slug: "cache-control/must-revalidate",
        description: "must-revalidate header"
      },
      {
        name: "proxy-revalidate",
        slug: "cache-control/proxy-revalidate",
        description: "proxy-revalidate header"
      },
      {
        name: "must-understand",
        slug: "cache-control/must-understand",
        description: "must-understand header"
      },
      {
        name: "private",
        slug: "cache-control/private",
        description: "private header"
      },
      {
        name: "public",
        slug: "cache-control/public",
        description: "public header"
      },
      {
        name: "immutable",
        slug: "cache-control/immutable",
        description: "immutable header"
      },
      {
        name: "stale-while-revalidate",
        slug: "cache-control/stale-while-revalidate",
        description: "stale-while-revalidate header"
      },
      {
        name: "stale-if-error",
        slug: "cache-control/stale-if-error",
        description: "stale-if-error header"
      }  
    ]
  },
];