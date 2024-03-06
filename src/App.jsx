import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hader from './Component/Header/Hader'
import Blogs from './Component/Blogs/Blogs'
import Course from './Component/Header/Course/Course'
import Blog from './Component/Blog/Blog'

function App() {
  // transfer Blog to Course
  const [course, setCourse] =useState([]);
  // transfer Price to Course
  const [priceToTk, setPriceToTk] = useState(0);
  // transfer Total Credite
  const [totalCredit, settotalCredit] = useState(0);

  // transfer Blog to Course ClickHandelar
  const handelSelect = blog =>{
    const newBlog = [...course, blog];
    console.log(newBlog);
    setCourse(newBlog);
  }
  // transfer Price to Course ClickHandelar
  const handelToPrice = price =>{
    const totalPrice = priceToTk + price;
    console.log(totalPrice);
    setPriceToTk(totalPrice);
  }
  // transfer to Cradite to Course clickHandelar
  const handelToCredit = cradit =>{
    const totalCradite = totalCredit + cradit;
    settotalCredit(totalCradite);
  }

  return (
    <>
      <Hader></Hader>
      <div className='md:flex mx-auto  max-w-6xl'>
        <Blogs handelSelect= {handelSelect} handelToPrice={handelToPrice} handelToCredit={handelToCredit}></Blogs>
        <Course course={course} priceToTk={priceToTk} totalCredit={totalCredit} ></Course>
      </div>
      
    </>
  )
}

export default App
