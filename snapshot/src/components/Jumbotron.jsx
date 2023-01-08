import React from 'react'
// import SearchField from './SearchField';

const Jumbotron = ({ children }) => {
  return (
    <>
    <div className='bg-dark d-flex align-items-center justify-content-center py-4'>
      <div className='w-50 mx-auto pb-3'>
        <h2 className='text-light text-center mb-3'>Snapshot</h2>
        {children}
      </div>
    </div>
    </>
  )
}

export default Jumbotron;