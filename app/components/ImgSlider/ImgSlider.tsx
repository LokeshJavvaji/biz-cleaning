import Slider from "@/components/Slider/Slider";

export default function ImgSlider() {
    const images = [
        "/slide/s1.jpg",
        "/slide/s2.jpg",
        "/slide/s3.jpg",
        "/slide/s4.jpg",
        "/slide/s5.jpg",
        "/slide/s6.jpg",
        "/slide/s7.jpg",
        "/slide/s8.jpg",
    ];

    return (
        <div className="w-full">
            <Slider images={images} />
            <p></p>
        </div>
    );
}
