import React, { createContext, useState } from 'react'
import Images from './components/Images'
import Jumbotron from './components/Jumbotron'
import  useAxios  from './hooks/useAxios'
import SearchField from './components/SearchField'

export const ImageContext = createContext();

export default function App() {
  const [searchImage , setSearchImage] = useState("");
  const {response , isLoading, error , fetchData} =useAxios(`search/photos?page=1&query=office&client_id=qVxHblnZCXiaFjTgMkAstQ12Oxd88yLXqp3CALrsknk`)
  // console.log(response);
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage

  }
  return (
   <>
   <ImageContext.Provider value={value}>
   <Jumbotron>
   <SearchField/>
   </Jumbotron>
   <Images />
   </ImageContext.Provider>
   </>
  )
}
