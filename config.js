"use strict";

var CONFIG = {
  "googlePlayUrl": "",
  "appStoreUrl": "",
  "amazonAppstoreUrl": "",
  "I18": {
    "locale": "en",
    "strings": {
      "Your score: %s": {
        "en": "Your score: %s"
      },
      "Download": {
        "en": "Download"
      }
    }
  },
  "domBinds": [],
  "application": {
    "showFPS": true,
    "debugCamera": true,
    "roundTime": 180000,
    //ms
    "camera": {
      "position": {
        x: 12.5,
        y: 10,
        z: 0
      }
    },
    "lightStrength": 0.75,
    "logsQuantity": 9,
    "logRowSize": 3,
    // How many logs should fit in 1 row
    "truckAccelerationPerTick": 10,
    "truckMaxEngineForce": 120.0,
    "truckMaxSpeed": 4.5,
    "truckMaxSteeringValue": 0.3,
    "truckSteeringSpeed": 0.02,

    /**
     * @truckDamping
     * After the break was initiated, 
     * truck velocity will be decreased 
     * by this value each update cycle
     */
    "truckDamping": 0.0015,

    /**
     * @obstacles - config of obstacles,
     * first value - corresponds to the name
     * valid names are:
     * trunk, stone1, stone2, stone3, stones
     * second value - track progress from 0 to 100
     * e.g.:start is 0, half is 50, finish is 100
     * third value is the offset on x axis in meters
     * any number is a valid value
     * 
     * if the array is empty:
     * "obstacles": []
     * a random obstacle course will be generated
     */
    "obstacles": [// ["stone1", 5, 0],
      // ["stone2", 10, 0],
      // ["stone3", 15, 3],
      // ["trunk", 20, -0.2],
      // ["trunk", 30, 1.2],
      // ["trunk", 49, 0],
      // ["trunk", 90, 0],
      // ["trunk", 100, 1]
    ]
  }
};