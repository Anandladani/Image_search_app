import React, { useContext } from 'react'
import { ImageContext } from '../App';
import Image from './Image';
import Skeleton from './Skeleton';

const Images = () => {
    const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
    <div className='container'>
    <h3 className='text-center mt-5 text-decoration-underline'>Results for {searchImage || 'Office'}</h3>
    <div className='row mt-5'>
      {isLoading ? <Skeleton /> : response.map((data,key)=><Image key={key} data={data}/>)}
     
    </div>
    
    </div>
  
    </>
  )
}

export default Images