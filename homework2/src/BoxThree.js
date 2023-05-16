import Button from "./btnComponent";

let boxName = "Footer";

function BoxThree() {
    return (
        <div className="box">
            <Button boxName={boxName} />
        </div>
    );
}

export default BoxThree;