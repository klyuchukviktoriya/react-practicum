export default function Articles(props) {
    const def = props.data;
    // console.log(props);

    return (
        <div className="articles">
            {def.map((item, index) => (
                <section key={index}>
                    <h2>{item.title}</h2>
                    <p> {item.body}</p>
                </section>
            ))}
        </div>
    );
}
