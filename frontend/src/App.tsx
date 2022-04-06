import { Button } from '@mui/material';
import React, { useEffect, useRef } from 'react';

import { Tello } from './tello/tello';

function App() {
    const tello = useRef<Tello>(new Tello());

    function onTakeOff() {
        console.log('Take Off');
    }

    function onLand() {
        console.log('Land');
    }

    return (
        <div>
            <Button onClick={onTakeOff}>Take Off</Button>
            <Button onClick={onLand}>Land</Button>
        </div>
    );
}

export default App;
