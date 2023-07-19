import { useState } from "react"
import RestartButton from "./RestartButton"
export default function WinModal(props){
    const [value, setValue] = useState(props.winner)

    return(
        <div className="absolute h-screen w-screen z-10 flex justify-center items-center top-0 right-0 bg-gray-800/95">
            <div className="flex flex-col justify-center items-center h-64 w-96">
                <p className="text-4xl font-bold text-white">{value == 'Empate' ? value : `${value} Venceu!`}</p>
                <RestartButton onClickHandler={props.onClickHandler}></RestartButton>
            </div>
        </div>
    )
}