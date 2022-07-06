import React from "react"

import Popup from "reactjs-popup"

export default function Homepage(){
    return (
        <div>
            <Popup trigger={<button> Order a dish </button>} position="right center">
                <div>
                    <form>
                        <label>
                        dish Name:
                            <input type="text" name="name" />
                        </label>
                        amount:
                        <input type="int"  name="size" />
                    </form>
                </div>
            </Popup>
        </div>
    )
}