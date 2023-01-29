import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

const fadeImages = [
  {
    url: 'https://122105172-796710936981709328.preview.editmysite.com/uploads/1/2/2/1/122105172/03.png',
    caption: 'First Slide'
  },
  {
    url: 'https://122105172-796710936981709328.preview.editmysite.com/uploads/1/2/2/1/122105172/04.png',
    caption: 'Second Slide'
  },
  {
    url: 'https://122105172-796710936981709328.preview.editmysite.com/uploads/1/2/2/1/122105172/05.png',
    caption: 'Third Slide'
  },
  
];

const Mode = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Mode