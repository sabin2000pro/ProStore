/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductList from "@/components/shared/products/ProductList";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();

  return <>

     <ProductList 
      data = {latestProducts}
      title = 'Newest Arrivals' />
  </>

}
 
export default Homepage;