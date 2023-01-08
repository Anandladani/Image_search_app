import React from 'react'

const Image = ({ data }) => {
  return (
    <div className='col-lg-3 col-md-4 col-12 col-sm-6 d-flex flex-row align-item-center justify-content-center'>
   <a href={data.urls.regular} target="_blank" rel="noreferrer" className='d-block mb-3'style={{"width":"16.25rem","height":"12.5rem","overflow":"hidden"}}>
    <img  src={data.urls.small} alt={data.alt_description}  className='img-fluid img-thumbnail object-fit-cover border rounded' style={{"width":"16.25rem","height":"12.5rem","overflow":"hidden"}}/>
   </a>
   </div>
  )
}

export default Image