import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./ProductPrice";
import {Product} from '@/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = ({product}: {product: Product}) => {

    return <>

        <Card className = 'w-full max-w-sm'>

            <CardHeader className = 'p-0 items-center'>

                <Link href = {`/product/${product?.slug}`}>

                    <Image 
                      src = {product.images[0]}
                      alt = {product?.name} 
                      height = {300} width = {300} priority />

                </Link>

            </CardHeader>

            <CardContent className = "p4 grid gap-4">

               <div className = "text-xs">{product?.brand}</div>

               <Link href = {`/product/${product?.slug}`}>
                  <h2 className = "text-sm font-medium">{product?.name}</h2>
               </Link>

               <div className = "flex-between gap-4">

                  <p>{product?.rating} Stars</p>
                  
                  {product.stock > 0 ? (
                     <ProductPrice value = {parseInt(product?.price)} />
                  ) : (
                    <>

                      <div className = 'bg-red-300 p-2 border-r-3'>
                         <p className = 'text-destructive'>Out of Stock</p>
                      </div>

                    </>
                  )}

               </div>

            </CardContent>

        </Card>

    </>

}
 
export default ProductCard;