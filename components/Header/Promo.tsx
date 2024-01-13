import { Link } from "@/components/CatalystUi/link";
import { Text } from "@/components/CatalystUi/text";
import React from "react";
import clsx from "clsx";

export default function Promo({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  return <div className="w-screen border-b-main border-b">
    <div {...props}
         className={clsx(className, "container h-promoHeader max-md:h-mPromoHeader grid grid-cols-3 max-md:grid-cols-1")}>
      <div className="s-flex gap-x-3 text-sm max-md:justify-center">
        <Link href="/" className="text-green-600">Free Shipping</Link>
        <span>|</span>
        <Link href="/" className="text-red-600">Price Match Guarantee</Link>
      </div>
      <Text className="!text-gray-800 c-flex max-md:hidden">The More You Shop,The More You Save-Join
        Our
        Loyalty
        Program Today!</Text>
      <div className="max-md:hidden"></div>
    </div>
  </div>;
}
