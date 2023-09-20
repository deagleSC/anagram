import React from "react";
import { useState } from "react";
import LetterContainer from "./LetterContainer";

const Anagram = ({anagram, blanks, anagramOptions}) => {

    let colorArray = []
    anagram.map((item) => {
        colorArray.push("blue")
    })

    const [options, setOptions] = useState(anagramOptions)
    const [blankInputs, setBlankInputs] = useState(blanks)
    const [success, setSuccess] = useState(false)
    const [colors, setColors] = useState(colorArray)

    const handleRemove = (item, index) => {

        let tempColors = [...colors]

        if (blanks[index] != "-" || item == "-") return
        let temp = [...blankInputs]
        temp[index] = "-"
        tempColors[index] = "blue"
        setColors(tempColors)

        let temp2 = [...options]
        temp2.push(item)

        setBlankInputs(temp)
        setOptions(temp2)

        let success = 1
        for (let i = 0; i<anagram.length; i++) {
            if (blankInputs[i] != anagram[i]
        && !(blankInputs[i] == "-" && anagram[i] == item)
                ) {
                success = 0
                break;
            }
        }

        if (success) setSuccess(true)
        else setSuccess(false)
    }

    const handleClick = (option, index) => {

        let tempColors = [...colors]

        let temp = [...blankInputs]
        for (let i=0; i<temp.length; i++) {
            if (temp[i] == "-") {
                temp[i] = option 
                tempColors[i] = "pink"
                console.log("found")
                break
            }
        }

        setColors(tempColors)

        let temp2 = [...options]
        let newTemp2 = []
        let removed = 0
        for (let i=0; i<options.length; i++) {
            if (temp2[i] != option || (temp2[i] == option && removed == 1)) {
                newTemp2.push(temp2[i])
            }

            else {
                removed = 1
            }
        }

        setBlankInputs(temp)
        setOptions(newTemp2)

        let success = 1
        for (let i = 0; i<anagram.length; i++) {
            if (blankInputs[i] != anagram[i]
        && !(blankInputs[i] == "-" && anagram[i] == option)
                ) {
                success = 0
                break;
            }
        }

        if (success) setSuccess(true)
        else setSuccess(false)
    }    

    return ( 
        <div className="Anagram">
        <div className="top"
        key={blankInputs}
        >
        {blankInputs.map((item, index) => ( 
            <div
            key={colors}
        
            onClick={() => {
                handleRemove(item, index)
            }}

            // style={{backgroundColor: colors[index]}}
            >
                <LetterContainer letter={item} color={colors[index]}/>
            </div>
        ))}
        </div>

        <div className="bottom">
        {options.map((item, index) => ( 
            <div
            onClick={() => {
                handleClick(item, index)
            }}
            >
                <LetterContainer letter={item} color={"blue"} />
            </div>
        ))}
        </div>

        {success && "Successful!"}
        </div>
    )
}

export default Anagram