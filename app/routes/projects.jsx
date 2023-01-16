import Heading from "~/components/Heading";
import carouselStyles from "~/carousel.css";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: carouselStyles
        }
    ];
}

export default function Projects() {
    const tableHeaders = [
        {
            name: 'No.',
            id: 1,
        },
        {
            name: 'Year',
            id: 2,
        },
        {
            name: 'Project',
            id: 3,
        },
        {
            name: 'Value (in Ksh)',
            id: 4,
        }
    ];

    const completedProjects = [
        [1, 1999, 'Catholic Church Kitengela', '300,000'],
        [2, 2000, 'Raphael Mambos residence', '150,000'],
        [3, 2000, 'Raphael Mambos residence', '180,000'],
        [4, 2001, 'Nairobi Primary School', '250,000'],
        [5, 2017, 'Alliance High School classroom block', '2,500,329'],
    ];

    return (
        <main className="px-8 sm:px-0 sm:w-4/5 2xl:max-w-7xl mx-auto space-y-5 lg:space-y-8 mt-24">
            <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl font-heading">Projects</h1>
            <Heading title='Completed projects' align='left' />
            <div className="max-w-xs sm:max-w-2xl lg:max-w-3xl overflow-x-auto">
                <table className="w-full border">
                    <thead className="font-heading">
                        <tr className="bg-[#343334] text-white ">
                            {tableHeaders.map(heading => (
                                <th key={heading.id} className="border px-2 py-2 text-left">{heading.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-body">
                        {completedProjects.map((project, index1) => (
                            <tr key={index1} className={`${index1 % 2 !== 0 ? 'bg-gray-100' : ''} `}>
                                {project.map((value, index2) => (
                                    <td key={index2} className="border px-2 py-2 text-left">{value}</td>
                                ))}
                            </tr>
                        ))}
                        {/* <tr>
                            {completedProjects.map((project, index) => (
                                <td key={index}>{project}</td>
                            ))}
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <Heading title='Ongoing projects' />
            <table>

            </table>
        </main>
    );
}