// import React from 'react';
// import Subject from '../../Subject/Subject';

// const Course = ({course}) => {
//     return (
//         <div className='md:w-3/4 text-center shadow-2xl p-4 m-3 rounded-xl'>
//             <h1>Course:{course.length}</h1>
//             {
//                 course.map(book => <Subject book= {book}></Subject>)
//             }
//         </div>
//     );
// };

// export default Course;
import React from 'react';
import Subject from '../../Subject/Subject';

const Course = ({ course, priceToTk, totalCredit}) => {
    return (
        <div className='md:w-3/4 text-center shadow-2xl p-4 m-3 rounded-xl space-y-4'>
            <div>
                <h1 className='text-3xl'>Total Cradit</h1>
                <p>{totalCredit} Hr</p>
                <p className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'></p>
            </div>
            <div>
            <h1 className='text-3xl'>Course Name</h1>
            {
                Array.isArray(course) && course.map((book, index) => (
                    <Subject key={book.id} book={book} index={index} />
                ))
            }
            </div>
            
            <div className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700'>
                <h1 className='text-3xl'>Cradite Cost</h1>
                <p>$ {priceToTk}</p>
            </div>
        </div>
    );
};

export default Course;
