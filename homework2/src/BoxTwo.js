import Button from "./btnComponent";

let boxName = "Main";

function BoxTwo() {
    return (
        <div className="box">
            <Button boxName={boxName} />
        </div>
    );
}

export default BoxTwo;