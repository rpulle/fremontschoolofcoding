import React from 'react'

const HomeInfo = () => {
  return (
    <div className='pb-11'>
        <h1
          className='text-center pt-20 font-bold text-6xl text-'
          style={{ fontFamily: 'Poppins, sans-serif' , color: '#273c60'}}
        >
          {'</ Fremont School of Coding >'}
        </h1>
        <p className='text-center pt-10 ' style={{ maxWidth: '80%', margin: '0 auto' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
      <div className="carousel carousel-center rounded-box" style={{ maxWidth: '80%', margin: '0 auto' }}>
      <div className="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
          alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
          alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
          alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Pizza" />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          alt="Pizza" />
      </div>
</div>
    </div>
    </div>
  )
}

export default HomeInfo