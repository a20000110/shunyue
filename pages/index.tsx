import HomeBanner from "@/components/Home/banner";
import clsx from "clsx";
import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "@/components/CatalystUi/link";
import { Button } from "@/components/CatalystUi/button";
import { Placeholder } from "@/components/Placeholder";
import { Text } from "@/components/CatalystUi/text";
import { Badge } from "@/components/CatalystUi/badge";

const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$149.00",
    rating: 5,
    reviewCount: 38,
    imageSrc: "/image/home/h-5.jpg",
    imageAlt: "TODO",
    href: "#"
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$15.00",
    rating: 5,
    reviewCount: 18,
    imageSrc: "/image/home/h-5.jpg",
    imageAlt: "TODO",
    href: "#"
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$15.00",
    rating: 5,
    reviewCount: 14,
    imageSrc: "/image/home/h-5.jpg",
    imageAlt: "TODO",
    href: "#"
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$15.00",
    rating: 4,
    reviewCount: 21,
    imageSrc: "/image/home/h-5.jpg",
    imageAlt: "TODO",
    href: "#"
  }
  // More products...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const ProductCart = ({
                       product
                     }: any) => {
  return <div key={product.id} className="group relative">
    <div
      className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 duration-300">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center group-hover:scale-110 duration-300"
      />
    </div>
    <div className="pb-4 pt-4 text-left">
      <h3 className="text-sm text-themBlack font-bold">
        <Link href={product.href} className="line-clamp-1">
          <span aria-hidden="true" className="absolute inset-0" />
          {product.name}
        </Link>
      </h3>
      <div className="mt-3 flex flex-col items-start">
        <p className="sr-only">{product.rating} out of 5 stars</p>
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={classNames(
                product.rating > rating ? "text-orange-500" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.reviewCount} reviews</p>
      </div>
      <p className="mt-2 text-base text-main font-bold">{product.price}</p>
    </div>
    <Button className="w-full !bg-main cursor-pointer">Add To Cart</Button>
  </div>;
};

const ProductCart2 = ({ product }: any) => {
  return <div key={product.id} className="group relative bg-white shadow rounded-b-[10px]">
    <div
      className="aspect-h-1 relative aspect-w-1 overflow-hidden bg-gray-200 duration-300">
      <img
        src={product.imageSrc}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center group-hover:scale-110 duration-300"
      />
      <Badge className="absolute top-1 right-2 !bg-orange-500 !text-white">5% OFF</Badge>
    </div>
    <div className="p-8 max-md:p-4">
      <h3 className="font-bold text-2xl max-md:text-sm max-h-[64px] md:h-[64px] line-clamp-2">{product.name}</h3>
      <Text className="!my-2 line-clamp-2 max-md:text-xs">{product?.description}</Text>
      <Button className="!bg-orange-500 !text-white !w-full cursor-pointer">Shop Now</Button>
    </div>
  </div>;
};

const ShowerStandard = () => {
  return <Layout>
    <Title>Shower standard products</Title>
    <div className="-mx-px grid grid-cols-2 gap-6 mt-12 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
      {
        products.map((p, index) => <ProductCart key={index} product={p} />)
      }
    </div>
    <div className="my-8 c-flex">
      <Button className="cursor-pointer !px-16 !bg-main">See More</Button>
    </div>
  </Layout>;
};

const StandardSmart = () => {
  return <div className="bg-[#f3f3f3]">
    <Layout>
      <Title>Standard smart mirror</Title>
      <div className="grid grid-cols-4 gap-6 mt-12 max-md:grid-cols-2">
        <Placeholder src="/image/home/h-6.webp" imageWidth={200} imageHeight={300} fit="cover"
                     className="rounded-[10px] hover:scale-110 duration-300 overflow-hidden" />
        {
          products.slice(0, 3).map((p, index) => <ProductCart key={index} product={p} />)
        }
      </div>
    </Layout>
  </div>;
};

const GlassShowerDoors = () => {
  return <Layout>
    <div
      className="w-full shadow-md border rounded-[10px] flex justify-start items-center overflow-hidden group max-md:flex-col-reverse">
      <div className="md:w-[40%] c-flex w-full shadow relative">
        <Placeholder src="/image/home/h-7.webp" imageWidth={640}
                     imageHeight={400} fit="cover" />
        <div className="absolute inset-0 c-flex">
          <div className="text-left max-md:px-8">
            <Title className="!text-left text-gray-700">Glass Shower Doors</Title>
            <Text className="max-w-[400px] py-4 text-themeGray">Personalize your shower experience with our
              Custom Glass Shower Doors crafted to your specifications. Transform your bathroom
              today!</Text>
            <Button className="!bg-main shadow cursor-pointer !px-10 shadow-main">Shop Shower Doors</Button>
          </div>
        </div>
      </div>
      <div className="flex-1 c-flex max-md:!h-[300px]">
        <Placeholder src="/image/home/h-8.webp" className="group-hover:scale-110 duration-1000" imageWidth={960}
                     imageHeight={400} fit="cover" />
      </div>
    </div>
  </Layout>;
};

const Installation = () => {
  return <div className="bg-[#f3f3f3]">
    <Layout>
      <Title>Installation Services</Title>
      <div className="-mx-px grid grid-cols-2 gap-6 mt-12 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
        {
          products.slice(0, 4).map(item => {
            return <ProductCart2 key={item.id} product={item} />;
          })
        }
      </div>
    </Layout>
  </div>;
};

const talkIcons = [{
  icon: "ri-file-text-line",
  title: <div><span className="text-main">Customization</span> At
    Its Best</div>,
  text: "Whether your project is just getting started or needs help to find the final touch, our glass and design experts are here to help you make your dreams come true."
}, {
  icon: "ri-truck-line",
  title: <div><span className="text-main">Customization</span> At
    Its Best</div>,
  text: "Whether your project is just getting started or needs help to find the final touch, our glass and design experts are here to help you make your dreams come true."
}, {
  icon: "ri-customer-service-2-fill",
  title: <div><span className="text-main">Customization</span> At
    Its Best</div>,
  text: "Whether your project is just getting started or needs help to find the final touch, our glass and design experts are here to help you make your dreams come true."
}, {
  icon: "ri-service-line",
  title: <div><span className="text-main">Customization</span> At
    Its Best</div>,
  text: "Whether your project is just getting started or needs help to find the final touch, our glass and design experts are here to help you make your dreams come true."
}];

const Talk = () => {
  return <div>
    <Layout>
      <div className="shadow border relative rounded overflow-hidden h-[339px]">
        <div className="c-flex -ml-[10px]">
          <Placeholder src="/image/home/h-7.webp" imageWidth={1600} imageHeight={339}
                       fit={"cover"}></Placeholder>
        </div>
        <div className="absolute inset-0 c-flex flex-col">
          <Title className="!text-left text-gray-700">Talk to Our Design Expert</Title>
          <Text className="my-2 max-w-[80%] mx-auto">Our design experts are here to assist you with your next
            glass, mirror, or shower door project.</Text>
          <Button className="!bg-main c-flex !py-3 !px-8 cursor-pointer mt-3">
            <i className="ri-calendar-2-line ri-xl mr-4"></i>
            <div>
              <Text className="!text-white text-left">Book a Virtual Consultation</Text>
              <Text className="!text-gray-200 text-left !text-xs font-normal">Response in one business
                day!</Text>
            </div>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 max-md:grid-cols-1 my-20 max-md:my-10">
        {
          talkIcons.map((item, index) => {
            return <div key={index}>
              <div className="flex-col flex max-md:flex-row max-md:justify-start max-md:items-center">
                <div className="mr-2"><i
                  className={clsx(item.icon, "text-[48px] text-gray-500 max-md:text-[24px]")}></i>
                </div>
                <div
                  className="max-md:!text-[16px] font-bold text-[#9aa1ae] text-2xl my-2">{item.title}</div>
              </div>
              <Text className="!text-sm">{item.text}</Text>
            </div>;
          })
        }
      </div>
    </Layout>
    <div className="bg-[#f3f3f3] py-6">
      <div className="container c-flex">
        <span className="max-md:hidden">Our customers say</span>
        <span className="ml-2 text-lg font-bold max-md:hidden text-themBlack">Excellent</span>
        <span className="mx-2 c-flex gap-x-1">
                    {
                      [1, 2, 3, 4].map(item => (
                        <div key={item} className="p-0.5 bg-[#00b67a]">
                          <StarIcon
                            key={1}
                            className={"text-white h-5 w-5 flex-shrink-0"}
                            aria-hidden="true"
                          />
                        </div>
                      ))
                    }
                </span>
        <span className="max-md:hidden">
                    4.8 out of 5 based on 2,475 reviews
                </span>
        <span className="flex items-end cursor-pointer ml-4">
                     <StarIcon
                       key={1}
                       className={"text-[#00b67a] h-5 w-5 flex-shrink-0"}
                       aria-hidden="true"
                     />
                    <span className="!text-black text-xs">Trustpilot</span>
                </span>
      </div>
    </div>
  </div>;
};

const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return <>
    <div className="container py-32 max-md:py-20">
      {children}
    </div>
  </>;
};

const Title = ({
                 children,
                 className = ""
               }: {
  children: React.ReactNode,
  className?: string
}) => {
  return <h2 className={clsx(className, "text-4xl font-bold text-primary-100 text-center max-md:text-2xl")}>
    {children}
  </h2>;
};

export default function Home() {
  return <div>
    <div className="mt-16">
      <div className="container">
        <HomeBanner />
      </div>
      <ShowerStandard />
      <StandardSmart />
      <GlassShowerDoors />
      <Installation />
      <Talk />
    </div>
  </div>;
}
