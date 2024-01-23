import { useEffect, useState } from "react"
import Component4 from "./components/Component4"
import Layout1 from "./layout/Layout1"
import Component3 from "./pages/Component3"
import ProductScreen from "./pages/ProductScreen"
import StoreScreen from "./pages/StoreScreen"

function App() {
  const [page, setPage] = useState(1);
  
  const navigateTo = (pageNumber) => {
    setPage(pageNumber);
  }


  const [data1, setData1] = useState(1);


  return (
    <Layout1>
      <button onClick={() => setPage(1)}>Product</button>
      <button onClick={() => setPage(2)}>Store</button>
      
      {page == 1 && <ProductScreen navigateTo={navigateTo}/>}
      {page == 2 && <StoreScreen navigateTo={navigateTo} data1={data1}/>}
    </Layout1>
  )
}

export default App
