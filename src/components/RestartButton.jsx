export default function RestartButton(props){
    return(
        <div className="flex justify-center items-center h-20 w-[30rem]">
            <button className="bg-slate-200 w-32" onClick={props.onClickHandler}>Restart</button>
        </div>
    )
}