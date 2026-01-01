import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="w-full">

            {/* HERO IMAGE */}
            <section className="max-w-7xl mx-auto px-4 pt-10">
                <div className="relative overflow-hidden rounded-3xl h-[220px] sm:h-[320px] md:h-[420px]">
                    <Image
                        src="/about-banner.jpg" // replace with your image path
                        alt="About Chatta Events"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium">
                            About Us
                        </h1>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-4 py-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-6">
                    We are here to help each person to celebrate their special moments with
                    budget price.
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Chatta Events, is family owned and located in Chattanooga. We both Zack
                    and Tom have similar taste and style with the same goal in mind, to
                    provide a naturally elegant event space as beautiful as Chattanooga
                    surrounding areas, for the ultimate indoor experience in Chattanooga.
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
            </section>

        </main>
    );
}
