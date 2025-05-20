import Image from 'next/image'

import { Product } from '../../../types/product';
import { GetServerSideProps } from 'next';

interface ProductDetailProps {
  product: Product | null;
  error?: string;
}

export const getServerSideProps: GetServerSideProps<ProductDetailProps> = async (context) => {
  // const { res, params } = context;
  // const { id } = params as { id: string };

  // console.log(res)
  // console.log(id)
  // res.setHeader('Cache-Control', 'no-store, must-revalidate');

  try {
    const { params } = context;
    const { id } = params as { id: string };

    console.log(id)

    const res = await fetch(`http://localhost:3001/products/${id}`, {
      cache: "no-store"
    });

    if (!res.ok) {
      throw new Error('Lỗi khi lấy danh sách sản phẩm');
    }

    const product = await res.json();
    return { props: { product } };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return { props: { product: null, error: error.message } };
  }
};


export default function ProductDetail({ product, error }: ProductDetailProps) {

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="container ">
      <h2 className='mb-4 text-2xl font-medium'>{product?.title}</h2>
      <div className='flex item-start gap-4'>
        <div className='min-w-[450px]'>
          <Image
            src={product?.images[0] || "/fallback.jpg"}
            alt={product?.slug || "Product"}
            unoptimized
            width={800}
            height={500}
            className='mb-4'
          />

        </div>
        <div>
          <p className='mb-4 font-medium text-2xl'>{product?.title}</p>
          <p className='mb-8'>Mô tả: {product?.description}</p>

          <div className="flex gap-2">
            <span className="bg-light mb-4 text-sm rounded-xs p-2 w-auto text-white">{product?.category?.slug}</span>
          </div>

          <p className='mb-6 font-medium'>Giá: {product?.price.toLocaleString()} VND</p>

          <button>Buy now</button>
        </div>
      </div>
      <div className='min-h-60'></div>
    </div>
  );
}