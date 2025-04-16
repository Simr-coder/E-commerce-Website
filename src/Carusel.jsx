import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './carusel.css'
import BannerText from './BannerText';
import { Link } from 'react-router';
const text = <div className='flex gap-2 mt-8 py-1 justify-around items-center flex-wrap md:flex-nowrap  rounded-2xl bg-white px-2' >
  <div className=' flex gap-1'>
    <img className=' w-6 h-6' src="https://th.bing.com/th/id/OIP.451wRuOmAD3h7AuJeRB7xQHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    <p>free delivery</p>
  </div>
  <hr className='bg-black' />
  <div className='flex px-1 md:border-x gap-1 ' >
    <img className='w-6 h-6  ' src="https://th.bing.com/th/id/OIP.23vJSVfnHLLoDuNfY-WpAgHaGr?w=222&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    <p>Cash on delivery</p>
  </div>
  <div className='gap-1 flex '>
    <img className='w-6 h-6' src="https://th.bing.com/th/id/OIP.9UU-q60iXk7YFP192wOh6QHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
    <p>Easy returns</p>
  </div>
</div>

// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',}

// });

export default function Carusel({ other }) {
  const newOther = [];
  other.forEach((e, i) => {
    newOther[other.length - 1 - i] = e
  })
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1350164916/photo/affectionate-asian-senior-mother-and-daughter-using-smartphone-together-at-home-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=-AgBobUeHU8tEZs0SZDYqMALX5MsgXkqxq_N-gvsfbg="
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <BannerText bg={'bg-[rgba(255,203,112,0.21)]'} right={'right-0'} h1={'All your faves are here'} innerText={<><p>This space is dedicated to your top choices thoughtfully selected to reflect your taste and style</p>
            <Link to='/product' state={other} > <button className='button'>Your Top Picks</button></Link> </>} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1683133991056-da64554aebea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpZmVzdHlsZSUyMG9mJTIwcGVvcGxlJTIwdXNpbmclMjBwcm9kdWN0fGVufDB8fDB8fHww"
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <BannerText bg={'bg-[rgba(151,120,209,0.2)]'} h1={'Let’s Explore Beyond the Obvious'} innerText={<><p>Broaden Your Horizon—Discover More Options</p>
            <Link to='/product' state={newOther}> <button className='button'>Unveil Hidden Gems</button></Link> </>} />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1302606028/photo/rear-view-of-young-woman-with-bag-standing-against-shelf-in-pharmacy-searching-for-medicine.webp?a=1&b=1&s=612x612&w=0&k=20&c=7Hc2vhRa3GqBArFdKIjrvrSGcmjveLEVzg_GcYG4SF0="
            loading="lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          <BannerText bg={'bg-[rgba(251,105,98,0.14)]'} h1={'Lowest Prices Best Quality Shopping'} innerText={text} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
