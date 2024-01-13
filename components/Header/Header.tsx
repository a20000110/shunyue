import Image from "next/image";
import { Text } from "@/components/CatalystUi/text";
import { Input } from "@/components/CatalystUi/input";
import { Link } from "@/components/CatalystUi/link";
import { ContactPhone } from "@/lib/constant/contact";
import { Slideovers } from "@/components/CatalystUi/slideovers";
import React, { useState } from "react";
import ShopCart from "@/components/Cart/ShopCart";
import { Placeholder } from "@/components/Placeholder";

function Search() {
    return <div>
        <div className="h-10 border-2 border-gray-500 rounded-[2px] b-flex">
            <Input className="h-full !text-gray-500" type="text"
                   placeholder="Search/Chat powered by AI... Ask us anything" />
            <i className="ri-openai-fill ri-xl text-gray-500 px-2 cursor-pointer"></i>
        </div>
        <Text className="e-flex">Powered by ChatGpt</Text>
    </div>;
}

function Controls() {
    return;
}

export default function Header() {
    const [openCart, setOpenCart] = useState(false);
    return <div className="bg-[#fbfaf7]">
        <div className="container md:h-headHeight grid-cols-3 grid max-md:hidden">
            <div className="col-span-2 s-flex gap-x-5">
                <div className="px-4">
                    <Image src="/logo.png" width={185} height={100} alt="" />
                </div>
                <div className="w-full mt-6 max-w-[680px]"><Search /></div>
            </div>
            <div className="e-flex !justify-start flex-col">
                <div className="c-flex gap-x-4">
                    <div className="s-flex gap-x-1">
                        <i className="ri-star-s-fill ri-2x text-[#31a3ce]"></i>
                        <div className="text-xs">
                            <p className="text-orange-500">Loyalty Rewards</p>
                            <p className="text-themBlack">With Every Purchase</p>
                        </div>
                    </div>
                    <div><i className="ri-question-fill ri-2x text-orange-500"></i></div>
                    <div className="s-flex gap-x-1">
                        <i className="ri-phone-fill ri-2x text-orange-500"></i>
                        <div>
                            <Link href={`tel:${ContactPhone}`}
                                  className="font-bold text-sm text-orange-500">{ContactPhone}</Link>
                            <p className="text-[#0f91ff] text-[10px]">8:30 AM - 9:00 PM EST</p>
                        </div>
                    </div>
                </div>
                <div className="c-flex gap-x-8 mt-2">
                    <div>
                        <Text className="!text-xs !text-gray-600">Hello,Sign in</Text>
                        <div className="relative text-sm !text-black font-bold group">
                            <span className="cursor-pointer">Account & Lists</span>
                            <i className="ri-arrow-down-s-fill pl-1 cursor-pointer"></i>
                            <ul className="w-[130px] hidden group-hover:flex absolute bg-white shadow flex-col overflow-hidden rounded-[5px] text-themeGray font-normal">
                                <li className="pl-4 py-1.5 hover:bg-gray-200 hover:text-themBlack cursor-pointer duration-300">Center</li>
                                <li className="pl-4 py-1.5 hover:bg-gray-200 hover:text-themBlack cursor-pointer duration-300">Setting</li>
                                <li className="pl-4 py-1.5 hover:bg-gray-200 hover:text-themBlack cursor-pointer duration-300">Logout</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <Text className="!text-xs !text-gray-600">Returns</Text>
                        <div className="relative text-sm !text-black font-bold">
                            <Link href="/" className="cursor-pointer">& Order Status</Link>
                        </div>
                    </div>
                    <div className="mx-3">
                        <i className="ri-shopping-cart-2-line relative text-gray-400 ri-3x cursor-pointer"
                           onClick={() => setOpenCart(!openCart)}>
                    <span
                        className="text-[12px] absolute top-[-2px] right-[-10px] c-flex w-[24px] h-[24px] bg-main rounded-full text-white">5</span>
                        </i>
                        <Slideovers open={openCart} setOpen={setOpenCart} title="Shopping Cart">
                            <ShopCart />
                        </Slideovers>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:hidden b-flex py-2 px-4">
            <i className="ri-menu-line ri-xl"></i>
            <Placeholder src="/logo.png" imageWidth={100} imageHeight={45} />
            <i className="ri-search-line ri-xl"></i>
        </div>
    </div>;
};
