import React from 'react';

const Blog = ({blog, handelSelect, handelToPrice, handelToCredit}) => {
    // console.log(blog);
    const {title, img, paragraph, price, credit_hour} = blog
    return (
        <div className='shadow-2xl p-4 m-3 rounded-xl'>
            <img src={img} alt="" />
            <h2 className='text-2xl'>{title}</h2>
            <p>{paragraph}</p>
            <div className='flex gap-4 mt-4'>
                <button onClick={()=> handelToPrice(price)}>Price : ${price}</button>
                <button onClick={()=> handelToCredit(credit_hour)}>Credit :{credit_hour}hr</button>
            </div>
            <button onClick={()=> handelSelect(blog)} className='bg-cyan-500 hover:bg-cyan-600 px-14 py-2 rounded-xl mt-2'>Select</button>
        </div>
    );
};

export default Blog;