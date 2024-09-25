import React, { useState, useEffect } from 'react';
import './Images.css';

function Images() {

    let userImageUrl = 'https://picsum.photos/350';
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        fetch(userImageUrl)
            .then(response => response.url)
            .then(url => setImageUrl(url))
            .catch(error => console.error('Error fetching image:', error));
    }, []);
    return (
      <div id="Images">
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
        <img src={imageUrl} alt="User" className='images'/>
      </div>
    );
  }
  
  export default Images;