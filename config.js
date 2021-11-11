"use strict";

var CONFIG = {
  "googlePlayUrl": "",
  "appStoreUrl": "",
  "amazonAppstoreUrl": "",
  "I18": {
    "locale": "ru",
    "strings": {
      "hurryAlert": {
        "ru": "Спеши, нужно доставить бревна вовремя!"
      },
      "bypassAlert": {
        "ru": "Объезжай препятствия, чтобы не терять бревна!"
      },
      "continue": {
        "ru": "Подолжить"
      }
    }
  },
  "domBinds": [],
  "application": {
    "showFPS": false,
    "debugCamera": false,
    "roundTime": 60000,
    //ms
    "camera": {
      "position": {
        "x": 12.5,
        "y": 8,
        "z": 0
      }
    },
    "level": 0,
    // current level
    "disableTutorial": false,
    "lightStrength": 0.75,
    "logsQuantity": 9,
    "logsToLose": 5,
    "logRowSize": 3,
    // How many logs should fit in 1 row

    /**
     * @truckAccelerationPerTick
     * Affects how soon truckMaxEngineForce can be reached. 
     * Can be only used to slow down the acceleration rate.
     * Higher values don't increase speed.
     */
    "truckAccelerationPerTick": 10,

    /**
     * @truckMaxEngineForce
     * How soon will the vehicle reach truckMaxSpeed
     */
    "truckMaxEngineForce": 160.0,
    "truckMaxSpeed": 4.5,
    //vehicle speed can't go above this value
    "truckMaxSteeringValue": 0.3,
    // How far can the wheels turn
    "truckSteeringSpeed": 0.02,
    // How wast will the wheels turn

    /**
     * @breakSpeed
     * After the break was initiated, 
     * truck velocity will be decreased 
     * by this value each update cycle
     */
    "breakSpeed": 0.3,

    /**
     * @obstacles - config of obstacles,
     * first value - corresponds to the name
     * valid names are:
     * trunk, stone1, stone2, stone3, stones
     * second value - track progress from 0 to 100
     * e.g.:start is 0, half is 50, finish is 100
     * third value is the offset on x axis in meters
     * any number is a valid value
     * array index coresponds to the current level index
     * 
     * if the array is empty:
     * "obstacles": []
     * a random obstacle course will be generated
     */
    "obstacles": [[// ["stone1", 5, 0],
      // ["stone2", 10, 0],
      // ["stone3", 15, 3],
      // ["trunk", 20, -0.2],
      // ["trunk", 30, 1.2],
      // ["trunk", 49, 0],
      // ["trunk", 90, 0],
      // ["trunk", 100, 1]
    ]]
  }
};
