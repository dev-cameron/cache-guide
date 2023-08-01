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
    ],
    description: 'The max-age directive is the simplest way to specify how long a resource should be cached. It is a relative time in seconds from the time of the request.'
  }
}

