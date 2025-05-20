import Image from 'next/image'

import { Product } from '../types/product';
import { GetStaticProps } from 'next';


interface ProductsPageProps {
  products: Product[];
  error?: string;
}

// export const dynamic = 'force-dynamic'; // Buộc SSR, ko cho phép cache

// async function fetchProducts(): Promise<Product[]> {
//   const res = await fetch('http://localhost:3001/products');

//   //  const res = await fetch('http://localhost:3001/products', {
//   //   cache: 'force-cache'
//   // });

//   console.log("res:::::", res)
//   if (!res.ok) {
//     throw new Error('Lỗi khi lấy danh sách sản phẩm');
//   }
//   return res.json();
// }

// export default async function Products() {
//   let products: Product[] = [];
//   let error: string | null = null;

//   try {
//     products = await fetchProducts();
//   } catch (err) {
//     error = (err as Error).message;
//   }

//   if (error) {
//     return <div>Lỗi: {error}</div>;
//   }

//   return (
//     <div className="container">
//       <h1 className='text-3xl mb-4'>Danh sách sản phẩm</h1>
//       <div className="product-list ">
//         {products.map((product) => (
//           <div key={product.id} className="product-card rounded-sm ">

//             <Image
//               src={product.images[0]}
//               alt={product.slug}
//               unoptimized
//               width={600}
//               height={400}
//               className='mb-2 min-h-[300px]'
//             />

//             <div className='p-4'>
//               <h3 className='text-xl mb-4'>{product.title}</h3>
//               <p className=' mb-4 line-clamp-2'>{product.description}</p>
//               <p className='mb-4'>Giá: {product.price.toLocaleString()} VND</p>
//               <a href={`/products/${product.id}`}>Xem chi tiết</a>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


export const getStaticProps: GetStaticProps<ProductsPageProps> = async () => {
  try {
    const res = await fetch('http://localhost:3001/products');
    if (!res.ok) {
      throw new Error('Lỗi khi lấy danh sách sản phẩm');
    }
    const products = await res.json();
    return { props: { products }};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { props: { products: [], error: error.message } };
  }
};

export default function Products({ products, error }: ProductsPageProps) {
  if (error) {
    return <div>Lỗi: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="text-3xl mb-4">Danh sách sản phẩm</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card rounded-sm">
            <Image
              src={product?.images[0] || '/fallback.jpg'}
              alt={product?.slug || 'Product'}
              unoptimized
              width={600}
              height={400}
              className="mb-2 min-h-[300px]"
            />
            <div className="p-4">
              <h3 className="text-xl mb-4">{product.title}</h3>
              <p className="mb-4 line-clamp-2">{product.description}</p>
              <p className="mb-4">Giá: {product.price.toLocaleString()} VND</p>
              <a href={`/products/${product.id}`}>Xem chi tiết</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
