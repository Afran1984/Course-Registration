import React from 'react';

const Subject = ({ book, index }) => {
    const { title } = book;
    return (
        <div>
            <h1>{index + 1}. {title}</h1>
        </div>
    );
};

export default Subject;
