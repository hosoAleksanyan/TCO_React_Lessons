import Button from "./btnComponent";

let boxName = "Header"

function BoxOne() {
    return (
        <div className="box">
            <Button boxName={boxName}/>
        </div>
    );
}

export default BoxOne;