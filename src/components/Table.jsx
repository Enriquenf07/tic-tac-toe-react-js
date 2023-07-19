import { useEffect, useState } from "react"
import Square from "./Square"
import WinModal from "./WinModal"
import RestartButton from "./RestartButton"

export default function Table() {
    const [squaresList, setSquaresList] = useState(Array(9).fill(null))
    const [value, setValue] = useState('X')
    const [winner, setWinner] = useState(null) 
    const [winModalFlag, setWinModalFlag] = useState(false)

    const handleclick = (i) => {
        if (squaresList[i] == null){
            squaresList[i] = value
            if (value == 'X'){
                setValue('O')
            }
            else{
                setValue('X')
            }
        }
    }

    function winCondition(list){
        if (list[0] && list[0] == list[1] && list[1] == list[2]){
            setWinner(list[0])
        }
        else if (list[3] && list[3] == list[4] && list[4] == list[5]){
            setWinner(list[3])
        }
        else if (list[6] && list[6] == list[7] && list[7] == list[8]){
            setWinner(list[6])
        }
        else if (list[0] && list[0] == list[4] && list[4] == list[8]){
            setWinner(list[0])
        }
        else if (list[2] && list[2] == list[4] && list[4] == list[6]){
            setWinner(list[2])
        }
        else if (list[0] && list[0] == list[3] && list[3] == list[6]){
            setWinner(list[0])
        }
        else if (list[1] && list[1] == list[4] && list[4] == list[7]){
            setWinner(list[1])
        }
        else if (list[2] && list[2] == list[5] && list[5] == list[8]){
            setWinner(list[2])
        }
        else if (!list.some((item) => item === null)){
            setWinner('Empate')
        }
        
    }

    useEffect(() => {
        winCondition(squaresList)
    }, [value])

    useEffect(() => {
        winner ? setWinModalFlag(true) : null
    }, [winner])

    const restartGame = () => {
        setSquaresList(Array(9).fill(null))
        setValue('X')
        setWinner(null)
        setWinModalFlag(false)
    }

    return( 
        <div>
            <div className='flex flex-col justify-between h-[30rem] w-[30rem]'>
                <div className="flex justify-between">
                    <Square value={squaresList[0]} onSquareClick={() => handleclick(0)}></Square>
                    <Square value={squaresList[1]} onSquareClick={() => handleclick(1)}></Square>
                    <Square value={squaresList[2]} onSquareClick={() => handleclick(2)}></Square>
                </div>
                <div className="flex justify-between">
                    <Square value={squaresList[3]} onSquareClick={() => handleclick(3)}></Square>
                    <Square value={squaresList[4]} onSquareClick={() => handleclick(4)}></Square>
                    <Square value={squaresList[5]} onSquareClick={() => handleclick(5)}></Square>
                </div>
                <div className='flex justify-between'>
                    <Square value={squaresList[6]} onSquareClick={() => handleclick(6)}></Square>
                    <Square value={squaresList[7]} onSquareClick={() => handleclick(7)}></Square>
                    <Square value={squaresList[8]} onSquareClick={() => handleclick(8)}></Square>
                </div>
            </div>
            <RestartButton onClickHandler={restartGame}></RestartButton>
            {winModalFlag ? <WinModal winner={winner} onClickHandler={restartGame}></WinModal> : null}
        </div>
    )
}

