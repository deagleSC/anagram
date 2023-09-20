import React from "react";
import { useState } from "react";
import LetterContainer from "./LetterContainer";

const Anagram = ({anagram, blanks, anagramOptions}) => {

    const [options, setOptions] = useState(anagramOptions)
    const [blankInputs, setBlankInputs] = useState(blanks)
    const [success, setSuccess] = useState(false)

    const handleRemove = (item, index) => {
        if (blanks[index] != "-" || item == "-") return
        let temp = [...blankInputs]
        temp[index] = "-"

        let temp2 = [...options]
        temp2.push(item)

        setBlankInputs(temp)
        setOptions(temp2)
    }

    const handleClick = (option) => {
        let temp = [...blankInputs]
        for (let i=0; i<temp.length; i++) {
            if (temp[i] == "-") {
                temp[i] = option 
                console.log("found")
                break
            }
        }

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
    }    

    return ( 
        <div className="Anagra">
        <div className="top"
        key={blankInputs}
        >
        {blankInputs.map((item, index) => ( 
            <div
            key={blankInputs}
            onClick={() => handleRemove(item, index)}
            >
                <LetterContainer letter={item} />
            </div>
        ))}
        </div>

        <div className="bottom">
        {options.map((item, index) => ( 
            <div
            onClick={() => handleClick(item)}
            >
                <LetterContainer letter={item} />
            </div>
        ))}
        </div>

        {success && "Successful!"}
        </div>
    )
}

export default Anagram