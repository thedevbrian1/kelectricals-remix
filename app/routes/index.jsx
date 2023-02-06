import { Link } from "@remix-run/react";
import CountUp from "react-countup";
import Heading from "~/components/Heading";
import { MeterIcon, PoleIcon, SolarIcon } from "~/components/Icon";
import Testimonial from "~/components/Testimonial";
import Carousel from "~/components/Carousel";
import carouselStyles from "~/carousel.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: carouselStyles
    }
  ];
}

export default function Index() {
  return (
    <main>
      {/* Hero section */}
      <Hero />
      {/* Services section */}
      <Services />
      {/* Projects */}
      <SampleProjects />
      {/* Testimonial section */}
      <Testimonials />
      {/* Licenses section */}
      <Licenses />
      {/* Carousel / gallery */}
    </main>
  );
}

function Hero() {
  return (
    <section className="h-screen w-full bg-[url('/solar-panel.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="w-full h-full bg-gradient-to-b lg:bg-gradient-to-r from-[#333333] to-[#DD1818]/30 text-white flex flex-col justify-center gap-y-5 lg:gap-y-7 px-5 md:px-10">
        <div className="space-y-2 lg:space-y-3 xl:max-w-4xl">
          <h1 className="font-bold font-heading text-4xl md:text-5xl xl:text-6xl">
            Power your house with <span className="text-green-500">renewable</span> energy
          </h1>
          <p className="text-lg md:text-2xl font-body">Do you wish to install solar panels alongside your main grid?</p>
        </div>
        <div className="flex gap-x-3 items-center font-body">
          <Link to="/about#contact" className="py-3 px-6 bg-red-500 hover:bg-red-600 rounded">
            Contact us
          </Link>
          <Link to="/projects" className="underline">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="my-16 lg:my-24 px-5 lg:px-0 lg:w-4/5 2xl:max-w-7xl mx-auto">
      <Heading title='Our professional services include:' align='center' />
      <div className="flex flex-col flex-wrap sm:flex-row sm:justify-center items-center gap-y-8 md:gap-y-0 sm:gap-x-6 md:gap-x-10 mt-8">
        <div className="space-y-2 flex flex-col items-center">
          <div className="w-36 lg:w-52 h-36 lg:h-52">
            <SolarIcon />
          </div>
          <p className=" text-center font-body">Solar panels installation</p>
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <div className="w-36 lg:w-52 h-36 lg:h-52">
            <PoleIcon />
          </div>
          <p className=" text-center font-body">Poles</p>
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <div className="w-36 lg:w-52 h-36 lg:h-52">
            <MeterIcon />
          </div>
          <p className=" text-center font-body">Meters installation</p>
        </div>
      </div>
    </section>
  );
}

function SampleProjects() {
  return (
    <section id="projects" className="w-full bg-gradient-to-b from-[#c31432] to-[#240b36]">
      <div className="px-5 sm:px-0 sm:w-4/5 mx-auto py-16 lg:py-24 flex flex-col items-center gap-y-5">
        <p className="text-white font-bold font-heading text-3xl md:text-4xl xl:text-5xl text-center">We have successfully completed <span className="text-green-500"><CountUp end={100} enableScrollSpy={true} scrollSpyDelay={50} scrollSpyOnce={true} />+</span> projects</p>
        <div className="w-full lg:w-3/4 aspect-w-1 aspect-h-1 md:aspect-w-16 md:aspect-h-9 relative mt-8 px-4 md:px-0 mb-4">
          <Carousel />
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      img: '/woman.jpg',
      alt: 'Picture of a woman',
      name: 'Jane Doe',
      title: 'CEO',
      company: 'XYZ Limited',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.'
    },
    {
      img: '/woman.jpg',
      alt: 'Picture of a woman',
      name: 'Jane Doe',
      title: 'CEO',
      company: 'XYZ Limited',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.'
    },
    {
      img: '/woman.jpg',
      alt: 'Picture of a woman',
      name: 'Jane Doe',
      title: 'CEO',
      company: 'XYZ Limited',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.'
    },
    {
      img: '/woman.jpg',
      alt: 'Picture of a woman',
      name: 'Jane Doe',
      title: 'CEO',
      company: 'XYZ Limited',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.'
    },
    {
      img: '/woman.jpg',
      alt: 'Picture of a woman',
      name: 'Jane Doe',
      title: 'CEO',
      company: 'XYZ Limited',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.'
    },
    {
      img: '/woman.jpg',
      alt: 'Picture of a woman',
      name: 'Jane Doe',
      title: 'CEO',
      company: 'XYZ Limited',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ab.'
    },

  ];

  return (
    <section className="px-5 sm:px-0 mt-16 lg:mt-24 space-y-5 sm:w-4/5 2xl:max-w-7xl mx-auto" id="testimonials">
      <Heading title="Here's what our clients have to say" align='center' />
      {/* TODO: Style the horizontal scroll bar. Add a scroll-snap easing */}
      <div className="flex gap-x-8 snap-x overflow-x-scroll max-w-max">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))
        }
      </div>
    </section>
  );
}

function Licenses() {
  const licenses = [
    'Energy Regulatory Commission Class "A"',
    'Kenya Power & Lighting Company contractor',
    'Kenya Power & Lighting Company pre-paid meter contractor',
    'National Construction Authority NCA4'
  ];
  return (
    <section className="px-8 sm:px-0 my-16 lg:my-24 space-y-5 sm:w-4/5 2xl:max-w-7xl mx-auto">
      <Heading title='Licenses & permits' align='center' />
      <div className="flex justify-center">
        <ul className="font-body">
          {/* TODO: Align list item content with marker (in the middle) */}
          {licenses.map((license, index) => (
            <li className="marker:content-[url('/flash.svg')] text-black-olive pl-2" key={index}>{license}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
