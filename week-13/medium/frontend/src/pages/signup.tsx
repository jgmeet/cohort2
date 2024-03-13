import { InputBox } from "../comps/inputbox";
import React from 'react';
import { Quote } from "../comps/quote";
import { Button } from "../comps/button";
import { Heading } from "../comps/heading";

export function Signup() {
    // return <Quote />

    return <div className="grid md:grid-cols-2">
            <div className="flex justify-center">
                <div className="w-3/4">
                    <Heading />
                    <InputBox label={'Username'} placeholder={'Enter your name'}/>
                    <InputBox label={'Email'} placeholder={'exapmple@gmail.com'}/>
                    <InputBox label={'Password'} placeholder={'123xyz'}/>
                    <Button label={'Signup'} />
                </div>
            </div>
            {/* <div className="invisible md:visible"> <Quote /> </div> */}
            <Quote />
    </div>
}