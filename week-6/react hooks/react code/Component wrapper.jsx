import React from "react"

function App() {

    return (
        <div>
        {/* <CardWrapper innerComponent={<TextComponent/>} />
        <CardWrapper innerComponent={<TextComponent1/>} />
        <CardWrapper innerComponent={<TextComponent2/>} /> */}

        {/* Below is the right way to do wrapping */}
        {/* note that it will be passed as a children and we have to accept it as a children when we will be calling the CardWrapper function in it */}
        <CardWrapper>
            <TextComponent></TextComponent>
        </CardWrapper>
        <CardWrapper>
            <TextComponent1></TextComponent1>
        </CardWrapper>
        <CardWrapper>
            <TextComponent2></TextComponent2>
        </CardWrapper>
        </div>
    )
}

function TextComponent() {
    return <div>
        <h1> This is the text component 1</h1>
    </div>
}

function TextComponent1() {
    return <div>
        <h1> This is the text component 2 </h1>
    </div>
}

function TextComponent2() {
    return <div>
        <h1> This is the text component 3</h1>
    </div>
}


// applys same style to the every component it's accepting
function CardWrapper({children}) {
    return <div style={{border: "12px solid blue", margin: 27}}>
        {children}
    </div>
}

export default App