import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import React from 'react';
import { Head, Link } from "@inertiajs/react";

export default function Contacts(props) {
    return (
        <div className="w-full h-full bg-color1 flex flex-col justify-start items-center gap-14 sm:gap-18 md:gap-20 lg:gap-0">
            <Head title={props.title} />
            <div className='bg-color2 w-full h-20'>
            <Navbar />
            </div>
            <div className="w-full h-auto bg-color4 text-white p-2 pl-20">
                    <nav className="text-xs">
                        <span className="text-red-300"> Home</span> /
                        <span className="text-white"> Kontak</span> 
                    </nav>
                    <h1 className="text-2xl font-bold">Kontak</h1>
                </div>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center pt-28 lg:px-20">
                <div className="w-full lg:w-1/2 max-w-[1127px] text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
                    <h1 className="text-black text-4xl md:text-6xl lg:text-7xl font-bold font-['Roboto']">
                        Butuh Bantuan? Jangan ragu untuk{" "}
                        <span className="text-color4">Menghubungi kami!</span>
                    </h1>
                    <p className="text-black text-lg md:text-xl lg:text-2xl font-normal font-['Roboto'] mt-8 lg:indent-16">
                        Tiamo merupakan taman wisata yang desain untuk wisata
                        keluarga. Terdapat taman, embung dan aneka bermain untuk
                        anak. Disamping taman dung-kluruk terdapat lapangan,
                        yang sering digunakan untuk berbagai macam acara. Saat
                        kita berada di taman wisata ini, kita dapat melihat
                        dengan jelas view gunung merbabu.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="w-full max-w-[1127px] px-4 lg:px-0">
                        <div className="w-full h-auto overflow-hidden relative">
                            <img
                                className="w-full h-auto lg:h-[450px] object-cover rounded-[20px]"
                                src="https://i.pinimg.com/564x/30/ab/df/30abdf8e422b9d9bb792305182e55993.jpg"
                                alt="Mobil"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-[1127px] border-t border-zinc-400 my-20"></div>

            <div className="w-full lg:w-[1127px] bg-white border border-black p-6 rounded-lg relative flex flex-col lg:flex-row">
            <img className="w-full lg:w-[600px] h-[670px] rounded-[10px] object-cover mb-4 lg:mb-0" src="https://via.placeholder.com/477x567" alt="Contact Image" />
            <div className="lg:ml-[50px]">
                <h3 className="text-black text-xl font-normal font-['Roboto']">Bantuan & Dukungan</h3>
                <h2 className="text-black text-[25px] font-bold font-['Roboto']">Kami senang mendengar dari Anda</h2>
                <form className="mt-4">
                    <div className="bg-neutral-100 rounded-[10px] p-4 mb-4">
                        <label htmlFor="name" className="block text-neutral-500 text-xl font-normal font-['Roboto'] mb-2">Nama Anda</label>
                        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="bg-neutral-100 rounded-[10px] p-4 mb-4">
                        <label htmlFor="email" className="block text-neutral-500 text-xl font-normal font-['Roboto'] mb-2">Email</label>
                        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div className="bg-neutral-100 rounded-[10px] p-4 mb-4 h-[250px]">
                        <label htmlFor="message" className="block text-neutral-500 text-xl font-normal font-['Roboto']">Pesan Anda</label>
                        <textarea id="message" name="message" className="w-full border border-gray-300 rounded-lg h-48"></textarea>
                    </div>
                    <button type="submit" className="bg-green-500 rounded-[10px] p-4 text-center cursor-pointer text-white text-xl font-bold font-['Roboto'] w-full">
                        Kirim
                    </button>
                </form>
            </div>
            </div>
            <div className='pt-28'>
            <Footer />
            </div>
        </div>
    );
}
