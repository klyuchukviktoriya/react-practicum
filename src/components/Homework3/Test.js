import React from "react";

class Test extends React.Component {
    render() {
        console.log(this.props);
        return (
            <>
                <div>
                    <h2>Классовый компонент</h2>
                    <p> Я хз зачем их учить, но ладно </p>
                </div>
            </>
        )
    }
}

export default Test;