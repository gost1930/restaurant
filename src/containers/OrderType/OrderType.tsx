import Image from "next/image";
// icons
import { IoIosArrowBack } from "react-icons/io";

const OrderType = () => {
  interface OrderType {
    id: number;
    name: string;
    href: string;
    image: string;
  }
  const orderTypes: OrderType[] = [
    {
      id: 1,
      name: "إستلام من الفرع",
      href: "/branch",
      image: "/assets/1.svg",
    },
    {
      id: 2,
      name: "توصيل لموقعك",
      href: "/order-now",
      image: "/assets/2.jpeg",
    },
    {
      id: 3,
      name: "إستلام في السيارة",
      href: "/order-now",
      image: "/assets/3.svg",
    },
  ];
  return (
    <div className="w-full h-full bg-secondery/10 p-5 relative">
      <div className="w-full h-full flex flex-col items-center justify-center">
        {/* title */}
        <h1 className="text-2xl font-bold text-secondery">كيف تبي طلبك</h1>
        <p className="text-zinc-600 text-xl">
          وفرنا لك أكثر من طريقة لاستلام طلبك ، اختر الطريقة اللي تناسبك .
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 translate-y-16">
          {orderTypes.map((orderType, index) => (
            <a
              href={orderType.href}
              key={index}
              className="flex border flex-col justify-between hover:-translate-y-2 duration-300 hover:shadow-xl rounded-3xl shadow bg-white cursor-pointer group overflow-hidden"
            >
              <div className="h-full flex justify-center items-end">
                <Image
                  src={orderType.image}
                  alt="delivery"
                  width={400}
                  height={400}
                  priority={true}
                />
              </div>
              <button className="flex justify-center items-center gap-x-2 w-full group-hover:bg-secondery/30 text-secondery text-2xl py-7">
                {orderType.name}
                <span className="group-hover:-translate-x-1 duration-300">
                  <IoIosArrowBack />
                </span>
              </button>
            </a>
          ))}
        </div> 
      </div>
    </div>
  );
};

export default OrderType;
