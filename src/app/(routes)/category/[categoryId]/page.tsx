import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { Billboard } from "@/components/billboard";
import { Container } from "@/components/ui/container";
import { NoResult } from "@/components/ui/no-result";
import { ProductCard } from "@/components/ui/product-card";
import { MobileFilter } from "@/components/mobile-filter";
import { Filter } from "@/components/ui/filter";

export const revalidate=0;

interface CategoryPageProps {
    params: {
        categoryId: string;
    };
    searchParams: {
        colorId?: string;
        sizeId?: string;
    }
}

export default async function CategoryPage({params, searchParams}: CategoryPageProps) {
    const products=await getProducts({
        categoryId:params.categoryId,
        colorId:searchParams.colorId,
        sizeId:searchParams.sizeId
    })
    const category=await getCategory(params.categoryId)
    const sizes=await getSizes();
    const colors=await getColors();
    return(
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboards}/>
                <div className=" pb-24 px-4 sm:px-6 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* add mobile filters */}
            <MobileFilter
            sizes={sizes}
            colors={colors}
            />
        <div className="hidden lg:block">
            <Filter
            valueKey="sizeId"
            name="sizes"
            data={sizes}
            />
            <Filter
            valueKey="colorId"
            name="colors"
            data={colors}
            />
        </div>
        <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length===0&&<NoResult/>}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {products.map((product)=>(
                    <ProductCard
                    key={product.id}
                    data={product}
                    />
                ))}
            </div>
        </div>
        </div>
        </div>
            </Container>
        </div>
    )

}