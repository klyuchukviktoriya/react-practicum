export default function Test2(props) {
    console.log(props);
    const user = props.data;
    console.log(user);
    const { name, surname } = props.data;
    const x = props.forX;
    console.log(x);
    const y = props.forY;
    console.log(y);


    return (
        <div>
            <p>My name is {name}</p>
            <p>My surname is {surname}</p>
        </div>
    );
}