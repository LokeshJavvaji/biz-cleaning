import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function KnowMore() {
    const router = useRouter()
    return (
        <div className="flex flex-col w-full p-16 pt-0 justify-center items-center text-center">
            <p className="mt-4 text-2xl font-bold text-center">
            At BIZ Cleaning, we deliver exceptional cleaning services customized to meet your specific requirements. With years of experience and a dedicated team of professionals, we ensure immaculate results every time. Our commitment to quality, reliability, and customer satisfaction sets us apart in the industry.
            </p>
            <Button className="mt-6 px-6 py-6 text-lg bg-red-400 hover:bg-red-500 cursor-pointer" onClick={()=>router.push('/contact')}>
                Contact Us
            </Button>
        </div>
    );
}
