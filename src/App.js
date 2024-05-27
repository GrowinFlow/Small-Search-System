import React from 'react';
import { SearchProvider } from './context/SearchProvider';
import SearchInput from './components/SearchInput';
import ProductsPrev from './components/ProductsPrev';
function App() {

  return (
    <SearchProvider>

    <>

      <div className=" h-screen bg-gray-700 flex justify-center items-center overflow-hidden">
        <div className="container mx-auto p-4">
          <SearchInput />

<ProductsPrev />


        </div>

      </div>

    </>
    </SearchProvider>
  );
}

export default App;
