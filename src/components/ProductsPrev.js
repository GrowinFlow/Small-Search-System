import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchProvider';
import Msg from './Msg';


function ProductsPrev(p) {
  // use context with SearchContext
  const {filterResults, isLoading, error, query} = useContext(SearchContext);

  function higjLightMatch(text, query){
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, "<mark>$1</mark>");

  }



  if(isLoading){
    return(
      <>
      <Msg msg="Loading . . ."/>
      </>
    )
  }

  if(error){
    return(
      <>
      <Msg msg="Error . . ."/>
      </>
    )
  }

  if(!filterResults || filterResults.length === 0){
    return(
      <>
     <Msg msg="Product Not Found . . . "/>
      </>
    )
  }

  return (
    <>
    <div className=' h-[75vh] overflow-auto overflow-x-auto relative top-8 scroll-bar'>
    

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Id</th>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Img</th>
            <th scope="col" className="px-6 py-3 text-left font-bold text-gray-500 uppercase tracking-wider">Title</th>
            <th scope="col" className="px-6 hidden md:flex py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Description</th>
            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">

          {filterResults.map((result, index) => (
            <tr key={index} className={`h-16 my-2 shadow-md rounded-md border-2 border-dashed border-slate-400 font-mono transition-transform duration-200 ease-linear delay-75  ${index % 2 === 0 ? 'bg-slate-400 text-black' : 'bg-gray-600 text-white'}`}>
              <td className="p-2 text-nowrap overflow-hidden text-ellipsis">{result.product_id}</td>
              <td className="p-2">
                <img src={result.product_feature_img} alt={result.title} className="h-12 w-12 rounded-md" />
              </td>
              <td className="p-2 text-xl font-bold text-nowrap overflow-hidden text-ellipsis"><span dangerouslySetInnerHTML={{__html: higjLightMatch(result.title, query)}}></span></td>
              <td className="p-2 text-md text-nowrap overflow-hidden text-ellipsis"><span dangerouslySetInnerHTML={{__html: higjLightMatch(result.description, query)}}></span></td>
              <td className="p-2 font-bold w-16 text-nowrap overflow-hidden text-ellipsis">${result.discount_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ProductsPrev;