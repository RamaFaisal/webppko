import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";

export default function Produk(props) {
    return (
        <div className="w-full h-full bg-color1 flex flex-col justify-start items-center gap-10 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />
            
            <div className="w-full">
                <img
                    className="w-full h-[550px] md:h-full lg:h-[750px] object-cover"
                    src="https://i.pinimg.com/564x/09/a9/4e/09a94e036d3938294a4c289a55f78fce.jpg"
                    alt="Beautiful Landscape"
                />
                <div className="w-full h-auto bg-color4 text-white p-4 ">
                        <nav className="text-sm">
                            <span className="text-red-300"> Home</span> /
                            <span className="text-white"> Informasi</span> /
                            <span className="text-white"> Produk</span>
                        </nav>
                        <h1 className="text-3xl font-bold">Produk</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">Berbagai Informasi Desa Tajuk</h1>
                <p className="mt-4 text-base md:text-lg lg:text-xl font-normal text-black">
                    Selamat datang di Menu Informasi kami. Di sini, Anda dapat menemukan berbagai informasi penting yang
                    berkaitan dengan layanan kami, kebijakan, dan hal-hal terkait lainnya. Kami siap membantu menjawab
                    pertanyaan Anda dan memberikan panduan yang diperlukan.
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="flex justify-center my-8">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Produk Wisata</h1>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="bg-white p-8 rounded shadow-md">
                {/* Main Image and Description */}
                <div className="mb-8">
                    <div className="flex w-full h-36 lg:h-64 rounded mb-4 overflow-hidden gap-5 justify-center">
                        <img 
                            src="https://via.placeholder.com/600x400"
                            alt="Gambar Utama"
                            className="w-full h-36 lg:h-64 object-cover" 
                        />
                    </div>
                    <div className="text-center">
                        <p>Deskripsi utama produk atau informasi terkait.</p>
                    </div>
                </div>
                
                {/* Bottom Images and Descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 1" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 2" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 2" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 2" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="flex justify-center my-10">
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Produk Olahan</h1>
                </div>
            </div>
            
            {/* Main Content */}
            <div className="bg-white p-8 rounded shadow-md">
                {/* Main Image and Description */}
                <div className="mb-8">
                    <div className="flex w-full h-36 lg:h-64 rounded mb-4 overflow-hidden gap-5 justify-center">
                        <img 
                            src="https://via.placeholder.com/600x400"
                            alt="Gambar Utama"
                            className="w-full h-36 lg:h-64 object-cover" 
                        />
                    </div>
                    <div className="text-center">
                        <p>Deskripsi utama produk atau informasi terkait.</p>
                    </div>
                </div>
                
                {/* Bottom Images and Descriptions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 1" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 2" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 2" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                    <div className="bg-gray-300 p-4 rounded">
                        <div className="w-full h-40 bg-red-600 rounded mb-4 overflow-hidden">
                            <img 
                                src="https://via.placeholder.com/300x200" 
                                alt="Gambar Tambahan 2" 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <div className="text-center">
                            <p>Deskripsi tambahan produk atau informasi terkait.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
            <Footer />
        </div>
    );
}
