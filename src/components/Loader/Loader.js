import React from 'react';
import { RiseLoader } from 'react-spinners';
const Loader = () => {
  return (
    <div style={{
      display:"flex",
      alignItems: "center",
      height: "50vh",
    }}>
      <RiseLoader color="336d7b7" />
    </div>
  )
}

export default Loader;
