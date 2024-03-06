import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handelSelect, handelToPrice, handelToCredit}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='md:w-3/3'>
            <div className='grid grid-cols-3'>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handelSelect={handelSelect} 
                    handelToPrice={handelToPrice}
                    handelToCredit ={handelToCredit}
                    ></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;