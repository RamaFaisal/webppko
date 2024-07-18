import React from "react";
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Carousel from "@/Components/Carousel";
import Footer from "@/Components/Footer";
import Destinasi from "@/Components/Destinasi";

export default function Paket(props) {
    return (
        <div className="w-full h-full bg-color1 flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />
            <div>
                <Carousel />
                <div className="w-full h-auto bg-color4 text-white p-4">
                    <nav className="text-xs">
                        <span className="text-red-300"> Home</span> /
                        <span className="text-white"> Paket</span>
                    </nav>
                    <h1 className="text-2xl font-bold">Paket</h1>
                </div>
            </div>
            <div className="w-full max-w-[1440px] flex flex-col items-center px-4 md:px-8 lg:px-16">
                <div className="w-full max-w-[1127px] text-center mt-10">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-roboto font-bold">
                        Pesona Alam dan Budaya Desa Tajuk
                    </h1>
                    <p className="text-black text-base md:text-lg lg:text-xl mt-4">
                        Nikmati pesona alam dan budaya Desa Tajuk dengan paket wisata istimewa kami. Temukan keindahan yang memukau dan pengalaman tak terlupakan hanya di sini. Pesan sekarang dan mulailah petualangan Anda!
                    </p>
                </div>
                
                <div className="w-full max-w-[1127px] border border-zinc-400 mt-10"></div>
                
                <div className="w-full max-w-[1127px] h-auto relative mt-10 border border-black p-4 md:p-8">
                    <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-bold">
                        Tingkatkan Petualangan Anda
                    </h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                            <h3 className="text-black text-xl font-bold">Silver</h3>
                            <p className="text-black text-lg font-bold">Rp 30.000/orang</p>
                            <button className="w-full h-12 mt-4 bg-zinc-300 rounded-[50px] text-black text-lg font-bold">Pilih paket</button>
                            <ul className="text-black text-base font-semibold mt-2 space-y-2">
                                <li>Transportasi lokal</li>
                                <li>Tiket masuk ke Dung Klorok dan Tiamo</li>
                                <li>Pemandu wisata</li>
                                <li>Makan siang lokal</li>
                                <li>Air mineral</li>
                            </ul>
                        </div>
                        <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                            <h3 className="text-black text-xl font-bold">Gold</h3>
                            <p className="text-black text-lg font-bold">Rp 50.000/orang</p>
                            <button className="w-full h-12 mt-4 bg-yellow-400 rounded-[50px] text-black text-lg font-bold">Pilih paket</button>
                            <ul className="text-black text-base font-semibold mt-2 space-y-2">
                                <li>Transportasi lokal</li>
                                <li>Tiket masuk ke Dung Klorok dan Tiamo</li>
                                <li>Pemandu wisata</li>
                                <li>Makan siang lokal</li>
                                <li>Air mineral</li>
                                <li>Trekking alam</li>
                                <li>Pertemuan budaya lokal</li>
                                <li>Sesi foto alam</li>
                            </ul>
                        </div>
                        <div className="w-full h-auto p-4 border border-gray-300 rounded-lg">
                            <h3 className="text-black text-xl font-bold">Platinum</h3>
                            <p className="text-black text-lg font-bold">Rp 75.000/orang</p>
                            <button className="w-full h-12 mt-4 bg-red-600 rounded-[50px] text-black text-lg font-bold">Pilih paket</button>
                            <ul className="text-black text-base font-semibold mt-2 space-y-2">
                                <li>Transportasi lokal</li>
                                <li>Tiket masuk ke Dung Klorok dan Tiamo</li>
                                <li>Pemandu wisata</li>
                                <li>Makan siang dan makan malam</li>
                                <li>Air mineral dan minuman ringan</li>
                                <li>Trekking alam</li>
                                <li>Pertemuan budaya lokal</li>
                                <li>Sesi foto profesional</li>
                                <li>Souvenir khas Desa Tajuk</li>
                                <li>Asuransi perjalanan</li>
                            </ul>
                        </div>
                    </div>
                    <div className="absolute justify-self-center w-full left-1/2 transform -translate-x-1/2 text-black text-sm lg:text-xl font-normal text-center">
                        <span className="justify-items-center">Ada yang Ingin Ditanyakan? <span className="underline">Kami Siap Membantu, Hubungi Kami</span></span>
                    </div>
                </div>
                
                <div className="w-full max-w-[1127px] border border-zinc-400 mt-10"></div>
                
                <div className="w-full">
                    <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-roboto font-bold text-center pt-10">
                        DESTINASI
                    </h1>
                    <Destinasi />
                </div>
            </div>
            <Footer />
        </div>
    );
}
