// import Test from "./Test";

import Test2 from "./Test2";

export default function Homework3() {
    let user = {
        name: "John",
        surname: 'Doe'
    }
    let x = 1;
    let y = [1, 2, 3];
    return (
        <div>
            {/* <Test data={user} /> */}
            <Test2 data={user} forX={x} forY={y} />

        </div>
    );
}