import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function ProfileDesa(props) {
    return (
        <div className="w-full h-full bg-color1 flex flex-col justify-start items-center gap-10 sm:gap-18 md:gap-20 lg:gap-25">
            <Head title={props.title} />
            <Navbar />
            <div className="w-full">
                <img
                    className="w-full h-[550px] md:h-full lg:h-[750px] object-cover"
                    src="https://i.pinimg.com/736x/9c/95/75/9c95751f1620f261ccc81d9373c94a0b.jpg"
                    alt="Beautiful Landscape"
                />
                <div className="w-full h-auto bg-color4 text-white p-4">
                    <div className="container mx-auto">
                        <nav className="text-sm">
                            <span className="text-red-300">Home</span> /
                            <span className="text-white"> Tentang Kami</span> /
                            <span className="text-white"> Profile Desa</span>
                        </nav>
                        <h1 className="text-2xl lg:text-3xl font-bold">Profile Desa</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
                <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold font-['Roboto']">
                    Profile Desa Tajuk
                </h1>
                <p className="text-black text-base md:text-lg lg:text-xl font-normal font-['Roboto'] mt-4">
                    Selamat datang di Menu Informasi kami. Di sini, Anda dapat
                    menemukan berbagai informasi penting yang berkaitan dengan
                    layanan kami, kebijakan, dan hal-hal terkait lainnya. Kami
                    siap membantu menjawab pertanyaan Anda dan memberikan
                    panduan yang diperlukan.
                </p>
            </div>

            <img 
                className="w-[370px] h-56 lg:w-[1127px] lg:h-[500px]"
                src="https://i.pinimg.com/564x/cc/b1/66/ccb16625ace80da8c9c43ca4023604cf.jpg" 
                alt="" />

            <div className="w-full lg:w-[1160px] h-auto text-justify text-black text-base md:text-lg lg:text-xl font-normal font-['Roboto'] mt-2 px-4">
                <p>
                    Selamat datang di Profil Desa Tajuk! Desa Tajuk adalah
                    sebuah destinasi wisata yang menggabungkan keindahan alam
                    dengan kekayaan budaya yang khas. Terletak di tengah-tengah
                    pegunungan yang hijau dan dikelilingi oleh panorama yang
                    memukau, Desa Tajuk menawarkan pengalaman wisata yang tak
                    terlupakan bagi setiap pengunjung.
                </p>
                <p className="mt-4">
                    Desa Tajuk dikenal karena keunikan budayanya yang masih
                    kental terjaga, mulai dari tarian tradisional hingga
                    kerajinan tangan yang indah. Dalam setiap sudut desa, Anda
                    dapat menemukan cerita dan kekayaan budaya yang melekat pada
                    masyarakatnya.
                </p>
            </div>

            <div className="w-full max-w-6xl h-auto relative mt-2 p-6 bg-white border border-black">
                <div className="text-justify px-2">
                    <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-normal font-['Roboto']">
                        Visi:
                    </h2>
                    <p className="text-black text-base md:text-lg lg:text-xl font-normal font-['Roboto'] mt-2">
                        "Menjadi destinasi wisata unggulan yang menggabungkan
                        keindahan alam dengan kekayaan budaya, memberikan
                        pengalaman wisata yang berkesan dan memberdayakan
                        masyarakat lokal."
                    </p>
                    <h2 className="text-black text-xl md:text-2xl lg:text-3xl font-normal font-['Roboto'] mt-4">
                        Misi:
                    </h2>
                    <ul className="text-black text-base md:text-lg lg:text-xl font-normal font-['Roboto'] list-disc ml-5">
                        <li>Mempromosikan keindahan alam Desa Tajuk sebagai daya tarik utama destinasi wisata.</li>
                        <li>Melestarikan dan mengembangkan kekayaan budaya Desa Tajuk melalui program pendidikan dan kegiatan budaya.</li>
                        <li>Memberikan pengalaman wisata yang berkesan dan bermakna bagi pengunjung dengan menjaga keaslian dan kualitas layanan.</li>
                        <li>Mengembangkan infrastruktur wisata yang ramah lingkungan dan berkelanjutan.</li>
                        <li>Mendorong partisipasi dan kesejahteraan masyarakat lokal melalui pemberdayaan ekonomi dan sosial.</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    );
}
