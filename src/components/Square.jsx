export default function Square(props) {
    return <button className="flex justify-center items-center text-6xl h-36 w-36 bg-slate-200" onClick={props.onSquareClick}>{props.value}</button>
}