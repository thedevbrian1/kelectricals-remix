export default function ListItem({ listItem }) {
    return (
        <li className="marker:content-[url('/flash.svg')] text-black pl-2">{listItem.text}</li>
    );
}