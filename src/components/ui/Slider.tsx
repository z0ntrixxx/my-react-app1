import React from 'react';
import { useEffect, useState } from 'react'

const Slider: React.FC = () => {
  const images = ['/images/grup.png', '/images/foto-2.png', '/images/foto1.png']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="slider" id="autoSlider">
      <div
        className="slider-inner"
        style={{ backgroundImage: `url('${images[index]}')` }}
      ></div>
      <div className="slider-dots" id="slider-Dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === index ? 'dot active' : 'dot'}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default Slider