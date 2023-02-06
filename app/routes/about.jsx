import { redirect } from "@remix-run/node";
import { Form, Link, useActionData, useLocation, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Heading from "~/components/Heading";
import { CallIcon, LocationIcon } from "~/components/Icon";
import Input from "~/components/Input";
import ListItem from "~/components/ListItem";
import TeamMember from "~/components/TeamMember";
import { validateEmail, validateMessage, validateName, validatePhone, badRequest, sendEmail, trimPhone, navLinks } from "~/utils";

export async function action({ request }) {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // console.log({ phone });
    const trimmedPhone = trimPhone(phone);
    // console.log({ trimmedPhone });

    const fields = { name, email, phone, message };
    const fieldErrors = {
        name: validateName(name),
        email: validateEmail(email),
        phone: validatePhone(trimmedPhone),
        message: validateMessage(message)
    }

    // Return errors if any
    if (Object.values(fieldErrors).some(Boolean)) {
        return badRequest({ fields, fieldErrors });
    }

    const emailObj = {
        name,
        email,
        phone,
        message
    };

    await sendEmail(emailObj);

    return redirect('/success');
}

export default function About() {
    const actionData = useActionData();
    const transition = useTransition();

    // const location = useLocation();

    const isSubmitting = transition.submission;

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        if (actionData?.fieldErrors.name) {
            nameRef.current?.focus();
        } else if (actionData?.fieldErrors.email) {
            emailRef.current?.focus();
        } else if (actionData?.fieldErrors.phone) {
            phoneRef.current?.focus();
        } else if (actionData?.fieldErrors.message) {
            messageRef.current?.focus();
        }
    }, [actionData]);

    return (
        <main className="">
            <div className="px-8 sm:px-0 sm:w-4/5 2xl:max-w-7xl mx-auto space-y-5 lg:space-y-8 mt-24">
                <h1 className="font-bold font-heading text-4xl md:text-5xl xl:text-6xl text-black dark:text-[#a6a29b]">About us</h1>
                <div className="space-y-3 text-black dark:text-[#a6a29b] font-body">
                    <p>
                        Kihara Electricals started operations in the year 1998, offering top class electrical installation services and consultancy. The company was incorporated to a Limited Liability Company in 2009. Our headquarter office is in Devkesh plaza, Ruiru town. Our subsidiary offices are in Nairobi R.Towers.
                    </p>
                    <p>
                        We have established a strong reputation for a diverse range of electrical services on commercial, government agencies, residential and supply of electrical materials. Our reputation for getting the job done on time, within budget and to the clients&#8217; total satisfaction has made us experience rapid growth within a short period of time. We have vast experience in working with engineering consultants, architects and main contractors; we believe that the success of every project is anchored in the experience of our qualified employees and communication channels, which exist between the design, construction and client representatives.
                    </p>
                </div>
                <div className="pt-12 lg:pt-16">
                    <div className="w-72 lg:w-[650px] xl:w-3/4 mx-auto">
                        <img
                            src="https://images.unsplash.com/photo-1597502310092-31cdaa35b46d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            loading="lazy"
                            alt="An electrical contractor climbing a pole"
                            className="max-w-full h-auto object-cover relative before:absolute before:block  before:-inset-1 before:bg-gradient-to-r before:from-[#333333] before:to-[#DD1818]"
                        />
                    </div>
                </div>
            </div>
            <Team />
            <CompanyPrinciples />
            <div className="w-full h-[75vh] mt-16 lg:mt-24">
                <img
                    src="https://wallpapercave.com/wp/wp3150969.jpg"
                    loading="lazy"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <Location />
            <section id="contact" className="px-8 sm:px-0 sm:w-4/5 2xl:max-w-7xl space-y-8 mx-auto mt-16 lg:mt-24 text-black-olive">
                <div className="flex flex-col items-center gap-y-4">
                    <div className="w-10 h-10 lg:w-14 lg:h-14">
                        <CallIcon />
                    </div>
                    <Heading title='Get in touch with us' />
                </div>
                {/* <div className="flex flex-col items-center"> */}
                <article className="md:max-w-md lg:max-w-lg mx-auto">
                    <h3 className="font-semibold text-xl xl:text-2xl font-heading">Call us on:</h3>
                    <p className="font-body">+254 722 861 107 / +254 710 348 239</p>
                </article>
                <div className="md:max-w-md lg:max-w-lg mx-auto">
                    <h3 className="font-semibold text-xl xl:text-2xl font-heading">Send us a message</h3>
                    <Form method="post">
                        <fieldset className="font-body">
                            <div className="flex flex-col">
                                <label htmlFor="name">Name</label>
                                <Input
                                    ref={nameRef}
                                    type='text'
                                    name='name'
                                    id="name"
                                    placeholder="John Doe"
                                    fieldError={actionData?.fieldErrors.name}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">Email</label>
                                <Input
                                    ref={emailRef}
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="johndoe@gmail.com"
                                    fieldError={actionData?.fieldErrors.email}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone">Phone</label>
                                <Input
                                    ref={phoneRef}
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="0710 162 152"
                                    fieldError={actionData?.fieldErrors.phone}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message">Message</label>
                                <Input
                                    ref={messageRef}
                                    type="textarea"
                                    name="message"
                                    id="message"
                                    placeholder="Enter message"
                                    fieldError={actionData?.fieldErrors.message}
                                />
                            </div>
                            <button type="submit" className="mt-2 bg-gradient-to-r from-[#333333] to-[#DD1818] py-3 px-6 rounded text-white">{isSubmitting ? 'Submitting...' : 'Submit'}</button>
                        </fieldset>
                    </Form>
                </div>
                {/* </div> */}
            </section>
        </main>
    );
}

function Team() {
    const qualifications = [
        {
            text: 'Higher Diploma in Electrical/Electronics Engineering',
            id: 1,
        },
        {
            text: 'Higher Diploma in Electrical/Electronics Engineering',
            id: 2,
        },
        {
            text: 'Higher Diploma in Electrical/Electronics Engineering',
            id: 3,
        },
        {
            text: 'Higher Diploma in Electrical/Electronics Engineering',
            id: 4,
        }
    ];

    return (
        <section className="space-y-4 bg-gray-50 dark:bg-gray-200 mt-16 lg:mt-24" id="team">
            <div className="px-12 sm:px-0 sm:w-4/5 2xl:max-w-7xl mx-auto pt-16 pb-16 lg:pt-24 lg:pb-24 text-center">
                <Heading title='Meet our team' />
                <div className="lg:px-6 grid sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4  justify-items-center gap-5 mt-4 lg:mt-6">
                    <TeamMember name='William Kihara' title='CEO' image={'person.png'} qualifications={qualifications} />
                    <TeamMember name='Brian Mwangi' title='CTO' image={'person.png'} qualifications={qualifications} />
                    <TeamMember name='Mwaura' title='CFO' image={'person.png'} qualifications={qualifications} />
                    <TeamMember name='William' title='Engineer' image={'person.png'} qualifications={qualifications} />
                </div>
            </div>
        </section>
    );
}

function CompanyPrinciples() {
    const coreValues = [
        {
            text: 'Quality',
            id: 1,
        },
        {
            text: 'Customer focus',
            id: 2,
        },
        {
            text: 'Safety',
            id: 3,
        },
        {
            text: 'Environmental stability',
            id: 4,
        },
        {
            text: 'Reliability & efficiency',
            id: 5,
        },
        {
            text: 'Capacity building & youth empowerment',
            id: 6,
        }
    ];

    return (
        <section className="px-8 sm:px-0 sm:w-4/5 2xl:max-w-7xl space-y-8 mx-auto mt-16 lg:mt-24">
            <article className="text-center">
                <Heading title='Our vision' />
                <p className="mt-4 font-body">To become the leading electrical engineering service provider in East Africa</p>
            </article>
            <article className="text-center">
                <Heading title='Our mission' />
                <p className="mt-4 font-body">To provide quality, reliable and efficient engineering solutions to our clients</p>
            </article>
            <article className="text-center">
                <Heading title='Our core values' />
                <ul className="px-8 mt-4 max-w-fit text-left mx-auto font-body">
                    {coreValues.map(value => (
                        <ListItem listItem={value} key={value.id} />
                    ))}
                </ul>
            </article>
        </section>
    );
}

function Location() {
    return (
        <section className="px-8 sm:px-0 sm:w-4/5 2xl:max-w-7xl space-y-8 mx-auto mt-16 lg:mt-24  text-black-olive">
            <div className="flex flex-col items-center gap-y-4">
                <div className="w-10 h-10 lg:w-14 lg:h-14">
                    <LocationIcon />
                </div>
                <Heading title='Location & address' align='center' />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col md:flex-row gap-8">
                    <article>
                        <h3 className="font-semibold text-xl xl:text-2xl font-heading">Find us at:</h3>
                        <p className="font-body">R-Towers, Nairobi / Devkesh Plaza, Ruiru</p>
                    </article>
                    <article>
                        <h3 className="font-semibold font-heading text-xl xl:text-2xl">Address:</h3>
                        <p className="font-body">P.O BOX 73185-00200 Nairobi, Kenya</p>
                    </article>
                </div>
            </div>
        </section>
    );
}
