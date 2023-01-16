export default function Heading({ title, align }) {
    return (
        <h2 className={`bg-gradient-to-r from-[#333333] to-[#DD1818] bg-clip-text text-transparent text-2xl md:text-3xl text-${align} lg:text-4xl font-bold font-heading`}>{title}</h2>
    );
}