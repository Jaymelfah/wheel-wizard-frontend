/* eslint-disable */
import React from 'react';
import { useColor } from 'color-thief-react';
import './color.css'

function ImageWithColors({ src }) {
  const { data, loading, error } = useColor(src, 'hex', {
    crossOrigin: 'anonymous',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{backgroundColor: data}} className="back-for-cars">
      
    </div>
  );
}

export default ImageWithColors;
