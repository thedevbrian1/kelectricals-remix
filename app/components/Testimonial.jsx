export default function Testimonial({ testimonial }) {
    return (
        <div className="p-8 w-[80vw] md:w-[43vw] xl:w-[30rem] rounded border border-slate-300  shrink-0 snap-start font-body ">
            <div className="flex gap-x-4 items-center">
                <div className="w-14 h-14 rounded-full">
                    <img
                        src={testimonial.img}
                        alt={testimonial.alt}
                        className="w-full h-full rounded-full object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="">
                    <p className="text-red-800 text-xl font-heading">{testimonial.name}</p>
                    <p className="text-gray-600 uppercase text-sm">{testimonial.title},{testimonial.company}</p>
                </div>
            </div>
            <div className="bg-white px-3 py-4 space-y-2">

                <p className="text-black-olive text-sm sm:text-base">{testimonial.message}</p>
            </div>
        </div>
    );
}