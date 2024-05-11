import React, { useEffect, useRef, useState } from 'react'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature'
import { GrPrevious,GrNext } from "react-icons/gr"
import FilterProduct from '../component/FilterProduct'
import AllProduct from '../component/AllProduct'
import { Link } from "react-router-dom";
import Imagecarousel from '../component/Imagecarousel'
import './Home.css';
import home1 from '../cp imgs/home1.jpg';
import home2 from '../cp imgs/home2.jpg';
import home3 from '../cp imgs/home3.jpg';

const Home = () => {
  const productData = useSelector((state)=>state.product.productList);
  const homeProductCartList = productData.slice(28,33);
  const homeProductCartListPaints = productData.filter(
    (el) => el.category === "paint",
    []
  );

  const loadingArray = new Array(5).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);


  const slideProductRef = useRef()
  const nextProduct = ()=>{
    slideProductRef.current.scrollLeft += 200
  }
  const preveProduct = ()=>{
    slideProductRef.current.scrollLeft -= 200
  }

  const images = [
    {image: home1 , text:'abcd'},
    {image: home2 , text:'asdfghjkrtyu'},
    {image: home3 , text:'asdfghjkrtyu'},
  ];

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='p-4 bg-slate-300 rounded'>
          {/* <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
            <img src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png' className='h-7'/>
          </div> */}
          <h2 className='text-4xl md:text-7xl font-bold py-3'>PMR Agencies <span className='text-red-500 text-'>CONSTRUCTION MATERIALS</span></h2>
          <p className='py-3 text-base'>One stop construction materials store for all types of construction materials at WHOLESALE</p>
          <Link to={"menu/66005acf90ee0f664d38c934"}><button className='font-bold bg-red-500 text-slate-200 px-4 py-2 rounded-md'>Explore now</button>
</Link>
        </div>

        
      </div>
      <br></br>

      <div className='carousell'>
            <Imagecarousel images={images} />
      </div>

      <AllProduct heading={"Your Product"} /> 
    </div>
  )
} 

export default Home