import Link from "next/link";
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";
import Addtocat from "./Addtocat";

export default function FeaturedProducts(){

    return(
        <section className="p-4 mb-5">
            <div className="flex items-center">
                <h2 className=" w-full shrink-3 uppercase mb-6 font-semibold text-2xl">FEATURED PRODUCTS</h2>
                <Separator className=" shrink-1"/>
            </div>
            <br/>
            <div className="grid grid-cols-4 gap-4">
                <div className="sd-card p-2">
                    <div className="p-5 space-y-3">
                        <Link href="#" className="outline-2 hover:outline-blue-200 hover:text-black hover:bg-[#9dc0e3] text-sm font-semibold rounded-full px-2 py-1 inline-block">Category</Link>
                        <h3 className="text-3xl text-blue-100">Graphics Card</h3>
                        <p className="text-[#9dc0e3] text-lg font-medium">€ 39.99 EUR</p>
                        <Addtocat/>
                    </div>
                    <div className="rounded ">
                        <Image src="/gc1.jpg" alt="pc gaming" className=" transition duration-500 ease-in-out transform hover:scale-105" width={500} height={100}/>
                    </div>
                </div>
                <div className="sd-card p-2">
                    <div className="p-5 space-y-3">
                        <Link href="#" className="outline-2 hover:outline-blue-200 hover:text-black hover:bg-[#9dc0e3] text-sm font-semibold rounded-full px-2 py-1 inline-block">Category</Link>
                        <h3 className="text-3xl text-blue-100">Gaming pc</h3>
                        <p className="text-[#9dc0e3] text-lg font-medium">€ 39.99 EUR</p>
                        <Addtocat/>
                    </div>
                    <div className="rounded bg-white">
                        <Image src="/pc3.png" alt="pc gaming" className=" transition duration-500 ease-in-out transform hover:scale-105" width={500} height={100}/>
                    </div>
                </div>
                <div className="sd-card p-2">
                    <div className="p-5 space-y-3">
                        <Link href="#" className="outline-2 hover:outline-blue-200 hover:text-black hover:bg-[#9dc0e3] text-sm font-semibold rounded-full px-2 py-1 inline-block">Category</Link>
                        <h3 className="text-3xl text-blue-100">Graphics Card</h3>
                        <p className="text-[#9dc0e3] text-lg font-medium">€ 39.99 EUR</p>
                        <Addtocat/>
                    </div>
                    <div className="bg-white rounded p-4">
                        <Image src="/gc2.webp" alt="pc gaming" className=" transition duration-500 ease-in-out transform hover:scale-105" width={500} height={100}/>
                    </div>
                </div>
                <div className="sd-card p-2">
                    <div className="p-5 space-y-3 ">
                        <Link href="#" className="outline-2 hover:outline-blue-200 hover:text-black hover:bg-[#9dc0e3] text-sm font-semibold rounded-full px-2 py-1 inline-block">Category</Link>
                        <h3 className="text-3xl text-blue-100">Gaming pc</h3>
                        <p className="text-[#9dc0e3] text-lg font-medium">€ 39.99 EUR</p>
                        <Addtocat/>
                    </div>
                    <Image src="/pc4.jpg" alt="pc gaming" className="rounded transition duration-500 ease-in-out transform hover:scale-105" width={500} height={100}/>
                </div>
            </div>
        </section>
    )
}