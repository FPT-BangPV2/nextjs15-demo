import { useRouter } from 'next/router';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    
    return (
        <div>

            <header className="p-4 bg-blue-800 text-white font-medium flex justify-between items-center">
                <div className="flex gap-2">
                    <button
                        onClick={() => router.back()}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                    >
                        ← Back
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                    >
                        Home
                    </button>
                </div>
                <span>Product</span>
            </header>


            <main className="p-4">{children}</main>
            <footer className="p-4 bg-gray-100 text-center">© 2025 My Website</footer>
        </div>
    );
}
