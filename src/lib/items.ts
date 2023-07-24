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
      {
        name: "Expires",
        slug: "expires",
        description: "The Expires header"
      }
    ]   
  },
  {
    name: "Reverse Proxy Cache",
    items: [
      {
        name: "Reverse Proxy Caching 101",
        slug: "reverse-proxy-caching-101",
        description: "A quick overview of reverse proxy caching"
      }
    ]
  },
  {
    name: "Proxy Cache",
    items: [
      { 
        name: "Proxy Caching 101",
        slug: "proxy-caching-101",
        description: "A quick overview of proxy caching"
      },
    ]
  }
];