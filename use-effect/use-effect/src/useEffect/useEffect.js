import React, { useEffect, useState, useRef } from 'react';
import './useEffect.css'
export default function ImageChange()
{
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWL5k3gQCV5Hiuxc6Uf7e9gIWD2268dWxJ5h6vhkd&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYT7zOAnXqk-F4O9GEjpktNTLm9bbUyALNNq6uG7Dlw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqAAFVAZmwxb6PbFAorPNng2VeNHpAlA0PAzYTFiCrA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5v8-PttAIwyDRPDNjcboPDljl-PuEXxGFimZm9pCiw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm0ZYewk96yBsmECxRNH-pM9Q0hMon3JE3uPy23YUI&s',
    
  ];
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.src = images[imageIndex];
  }, [imageIndex]);

  const changeImage = () => {
    if(imageIndex<images.length-1){
        setImageIndex(imageIndex+1);

    }
    else{
        alert('no more image')
    }
  };

  return (
    <div className='wrapper'>
      <img  ref={imageRef} alt="Current Image" /><br>
      </br>
      <button onClick={changeImage}>Change Image</button>
    </div>
  );
};