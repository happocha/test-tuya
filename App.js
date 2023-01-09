import React, { useEffect } from 'react';

import {laserDataApi} from '@tuya-smart/tuya-panel-robot-sdk';

const App = () => {
  useEffect(() => {
    laserDataApi.getLaserMapHistoryList().then((response) => {
        console.log(response)
    }).catch(error => {
        console.error(error)
    })
  },[])

  return null
};

export default App;
