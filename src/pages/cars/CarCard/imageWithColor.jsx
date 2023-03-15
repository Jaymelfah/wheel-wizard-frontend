/* eslint-disable */
import React from 'react';
import { useColor } from 'color-thief-react';
import './color.css'
import carload from '../../../assets/carload.gif'

function ImageWithColors({ src }) {
  const { data, loading, error } = useColor(src, 'hex', {
    crossOrigin: 'anonymous',
  });

  if (loading) {
    return (
      <div>
          <img src={carload} alt="loading" className="carload" />
      </div>);
  }

  if (error) {
    return (
      <div style={{backgroundColor: '#afacac'}} className="back-for-cars">
        
      </div>
    );
  }

  return (
    <div style={{backgroundColor: data}} className="back-for-cars">
      
    </div>
  );
}

export default ImageWithColors;
