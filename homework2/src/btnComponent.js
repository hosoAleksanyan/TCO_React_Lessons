import './App.css';

function Button({ boxName }) {
    let btnId = "button" + boxName;

    return (
        <p onClick={() => show(boxName, btnId)} className="btn" id={btnId}>Click</p>
    );
}

function show(name, id) {
    let btn = document.getElementById(id);

    btn.innerText = "This is " + name;
    btn.classList.remove("btn");
    btn.classList.add("btn-active");

}

export default Button;