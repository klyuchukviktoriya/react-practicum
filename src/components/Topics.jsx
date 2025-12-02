export default function Topics(props) {
    const def = props.data;
    console.log(def);

    return def.map((item, index) => (
        <li key={index}>
            <a href={item.href}>{item.title}</a>
        </li>
    ));
}
