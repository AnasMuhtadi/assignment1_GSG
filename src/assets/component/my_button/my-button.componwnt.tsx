
interface Iprops{
    num : string
    onClick : () => void
}
function MyButton(props :Iprops){
    return (
        <button onClick={props.onClick} className="number">{props.num}</button>
    )
}


export default MyButton;