import { Link } from "@/components/CatalystUi/link";

const menus = [
    "Glass Table Tops",
    "Shower Doors",
    "Custom Glass",
    "Gym Mirrors",
    "Mirrors",
    "Glass Shelves",
    "Hardware",
    "Installation",
    "Sale"
];
export default function Nav() {
    return <div className="bg-main h-navHeight max-md:hidden c-flex">
        <ul className="space-x-8 c-flex container max-[1000px]:space-x-4">
            {
                menus.map((item, index) => (
                    <li key={item}>
                        <Link href="/"
                              className={`${item === "Sale" ? "text-orange-500" : "text-gray-200"}
                              `}>
                            {item}
                            {
                                item === "Sale" && <i className="ri-fire-fill text-orange-500" />
                            }
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>;
}
