import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';
import Carousel from '@/Components/Carousel'; // Pastikan Anda memiliki komponen Carousel
import { Head, Link } from "@inertiajs/react";

export default function Gallery(props) {
    // Data gambar dan link Instagram untuk kartu
    const cards = [
        { src: 'https://via.placeholder.com/265x260?text=Gambar+1', link: 'https://www.instagram.com/example1' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+2', link: 'https://www.instagram.com/example2' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+3', link: 'https://www.instagram.com/example3' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+4', link: 'https://www.instagram.com/example4' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+5', link: 'https://www.instagram.com/example5' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+6', link: 'https://www.instagram.com/example6' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+7', link: 'https://www.instagram.com/example7' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+8', link: 'https://www.instagram.com/example8' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+9', link: 'https://www.instagram.com/example9' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+10', link: 'https://www.instagram.com/example10' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+11', link: 'https://www.instagram.com/example11' },
        { src: 'https://via.placeholder.com/265x260?text=Gambar+12', link: 'https://www.instagram.com/example12' }
    ];

    return (
        <div className="w-full h-full bg-color1 flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />
            <div>
                <Carousel />
                <div className="w-full h-auto bg-color4 text-white p-4">
                    <nav className="text-xs">
                        <span className="text-red-300"> Home</span> /
                        <span className="text-white"> Informasi</span> /
                        <span className="text-white"> Galeri</span> 
                    </nav>
                    <h1 className="text-2xl font-bold">Galeri</h1>
                </div>
            </div>
            <div className="w-full max-w-[1127px] text-center px-4 md:px-8">
                <h1 className="text-black text-3xl md:text-4xl lg:text-[55px] font-bold font-['Roboto']">
                    Berbagai Informasi Desa Tajuk
                </h1>
                <p className="text-black text-base md:text-lg lg:text-[25px] font-normal font-['Roboto'] mt-4">
                    Selamat datang di Menu Informasi kami. Di sini, Anda dapat menemukan berbagai informasi penting yang berkaitan dengan layanan kami, kebijakan, dan hal-hal terkait lainnya. Kami siap membantu menjawab pertanyaan Anda dan memberikan panduan yang diperlukan.
                </p>
            </div>
            <div className="w-full max-w-[1141px] grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 px-4 md:px-8">
                {cards.map((card, index) => (
                    <a key={index} href={card.link} target="_blank" rel="noopener noreferrer" className="bg-zinc-300 rounded-lg overflow-hidden">
                        <img src={card.src} alt={`Informasi ${index + 1}`} className="rounded-lg object-cover w-full h-full" />
                    </a>
                ))}
            </div>
            <Footer />
        </div>
    );
}
