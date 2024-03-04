'use client'
import React from 'react';



const Pagination = ({ currentPage, totalPages,onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="join">
            <button className="join-item btn" onClick={handlePrevious}>{'«'}</button>
            <button className="join-item btn" disabled>{`Page ${currentPage}`}</button>
            <button className="join-item btn" onClick={handleNext}>{'»'}</button>
        </div>
    );
};

export default Pagination;