import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <h1 className='text-3xl mb-6'>Chào mừng đến với cửa hàng</h1>
      <Link href="/products">
        Xem danh sách sản phẩm
      </Link>
    </div>
  );
}