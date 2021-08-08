import React from 'react'

function Inputs() {
    return (
        <form>

            <select>
                <option value="+">+</option>
                <option value="-">-</option>
            </select>

            <input type="text"/>
            <input type="number"/>

            <input type='submit' value = 'add'/>
        </form>
    )
}

export default Inputs

//we need to hook up the plus minus first.
// We need to capture the text
// We need to capture the number.
// once we hit submit, it should get submitted.

