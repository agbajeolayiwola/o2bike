import React from 'react';
import { HexColorPicker } from "react-colorful"
import {proxy, useSnapshot } from "valtio"



const state = proxy({
    current: null,
  })
  

const Picker = () => {
    const snap = useSnapshot(state)
  return (
     <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker className="picker" color={snap.items[snap.current]} onChange={(color) => (state.items[snap.current] = color)} />
      <h1>{snap.current}</h1>
    </div>
  )
};

export default Picker;
