import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl md:text-6xl font-bold  text-center mb-4">
        Welcome to Our Shop
      </h1>
      <div className='flex items-center gap-4'>
        <section >
          <div className="  bg-opacity-50 flex items-center justify-center">
            <Image
              src="https://cdn.pixabay.com/photo/2019/06/17/09/27/website-4279521_640.jpg"
              alt="Product"
              unoptimized
              width={800}
              height={300}
              className='mb-4'
            />
          </div>
        </section>

        <section className="flex items-center justify-center flex-col">
          <h2 className="text-2xl font-semibold mb-4">Discover Our Products</h2>
          <p className="text-gray-600 max-w-[800px] text-center mb-4">
            We offer a wide range of high-quality products to meet your needs. Whether you are shopping for fashion, electronics, or home goods — we have got you covered.
          </p>
          <Link href="/products">
            View List Product
          </Link>
        </section>
      </div>
    </div >
  );
}