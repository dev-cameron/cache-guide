export interface Frame {
  activeNode: string;
  type: string;
  description: string;
  httpObj: { headers: { 
    [key: string]: string 
    }
  };
}

export interface Scenario {
  frames: Array<Frame>; 
  description: string;
}

export interface ScenarioGroup {
  [key: string]: Scenario;
}

export const cacheScenarios: ScenarioGroup = {
  'max-age': {
    frames: [
      {
        activeNode: 'clientRef',
        type: 'request',
        description: 'Client requests a script, a stylesheet, and an image.',
        httpObj: {
          headers: {
            'request': 'GET /script-v1.js, GET /styles-v1.css, GET /cats-v1.jpg',
          }
        }
      },
      {
        activeNode: 'cacheRef',
        type: 'request',
        description: 'Browser checks cache for script, stylesheet, and image. Since it\'s the first time this client has requested these resources, they are not in the cache. Browser sends request to server.',
        httpObj: {
          headers: {
            'request': 'GET /script-v1.js, GET /styles-v1.css, GET /cats-v1.jpg',
          }
        }
      },
      {
        activeNode: 'serverRef',
        type: 'response',
        description: 'Server sends script, stylesheet, and image to browser. Server also sends Cache-Control header with max-age directive set to 3600 seconds (1 hour).',
        httpObj: {
          headers: {
            'response': '200 OK',
            'cache-control': 'max-age=3600',
          }
        }
      },
      {
        activeNode: 'clientRef',
        type: 'response',
        description: 'Browser receives the response from the server and stores the script, stylesheet, and image in its cache along with the "max-age" directive.',
        httpObj: {
          headers: {
            'response': '200 OK',
            'cache-control': 'max-age=3600',
          }
        }
      },
      {
        activeNode: 'clientRef',
        type: 'request',
        description: '...Let\'s say 30min have passed (still within 1hr max-age). \nClient makes a subsequent request for the same script, stylesheet, and image within the "max-age" timeframe.',
        httpObj: {
          headers: {
            'request': 'GET /script-v1.js, GET /styles-v1.css, GET /cats-v1.jpg',
          }
        }
      },
      {
        activeNode: 'cacheRef',
        type: 'request',
        description: 'Browser checks its cache for the script, stylesheet, and image in response to the subsequent request and finds them within the "max-age" timeframe.',
        httpObj: {
          headers: {
            'request': 'GET /script-v1.js, GET /styles-v1.css, GET /cats-v1.jpg',
          }
        }
      },
      {
        activeNode: 'clientRef',
        type: 'request',
        description: '...2 hours have passed. \n\nClient makes a request for the same script, stylesheet, and image after the "max-age" timeframe has passed.',
        httpObj: {
          headers: {
            'request': 'GET /script-v1.js, GET /styles-v1.css, GET /cats-v1.jpg',
          }
        }
      },
      {
        activeNode: 'cacheRef',
        type: 'request',
        description: 'Browser checks its cache for the script, stylesheet, and image after the "max-age" timeframe has passed and finds that they are now considered stale.',
        httpObj: {
          headers: {
            'request': 'GET /script-v1.js, GET /styles-v1.css, GET /cats-v1.jpg',
          }
        }
      },
      {
        activeNode: 'serverRef',
        type: 'response',
        description: 'Since the cached resources are now stale, the browser sends a request to the server for the script, stylesheet, and image.',
        httpObj: {
          headers: {
            'response': '200 OK',
            'cache-control': 'max-age=3600',
          }
        }
      },
      {
        activeNode: 'clientRef',
        type: 'response',
        description: 'The server responds with the latest versions of the script, stylesheet, and image. The browser updates its cache with these new versions.',
        httpObj: {
          headers: {
            'response': '200 OK',
            'cache-control': 'max-age=3600', // Optionally, the server may specify a new "max-age" directive.
          }
        }
      },
    ],
    description: 'The max-age directive is the simplest way to specify how long a resource should be cached. It is a relative time in seconds from the time of the request.'
  },
  'max-stale': {
    "frames": [
      {
        "activeNode": "clientRef",
        "type": "request",
        "description": "User enters 'https://example.com' in the browser's address bar.",
        "httpObj": {
          "headers": {
            "request": "GET /index.html"
          }
        }
      },
      {
        "activeNode": "cacheRef",
        "type": "request",
        "description": "Content not in cache at this time, so browser sends request to server.",
        "httpObj": {
          "headers": {
            "request": "GET /index.html"
          }
        }
      },
      {
        "activeNode": "serverRef",
        "type": "response",
        "description": "Server receives and processes the GET request, responding with 'index.html' and max-age directive.",
        "httpObj": {
          "headers": {
            "response": "200 OK",
            "cache-control": "max-age=3600"
          }
        }
      },
      {
        "activeNode": "clientRef",
        "type": "request",
        "description": "User returns to 'https://example.com' within 30 minutes.",
        "httpObj": {
          "headers": {
            "request": "GET /index.html"
          }
        }
      },
      {
        "activeNode": "cacheRef",
        "type": "response",
        "description": "Browser serves the cached 'index.html' since it's within the max-age limit.",
        "httpObj": {
          "headers": {
            "response": "200 OK",
            "cache-control": "max-age=3600"
          }
        }
      },
      {
        "activeNode": "clientRef",
        "type": "request",
        "description": "User clicks 'Refresh' after 2 hours, requesting a potentially stale copy. Client request includes max-stale directive.",
        "httpObj": {
          "headers": {
            "request": "GET /index.html",
            "cache-control": "max-stale=14400"
          }
        }
      },
      {
        "activeNode": "cacheRef",
        "type": "response",
        "description": "Browser provides the cached 'index.html' since it's within the max-stale limit.",
        "httpObj": {
          "headers": {
            "response": "200 OK",
            "cache-control": "max-age=3600"
          }
        }
      }
    ],
    "description": "ExampleHTTP request-response cycle using max-age and max-stale directives."
  }
}

