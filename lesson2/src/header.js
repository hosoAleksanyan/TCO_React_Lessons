import CustomBox from "./components/customBox";
import CustomButton from "./components/customButton";

function Header() {
    return (
        <div style={{ padding: '5px', border: '3px solid red', textAlign: 'center', margin: '10px auto', width: '75%' }}>
            <h2>Header</h2>
            <CustomButton title={'Header Button'} />
            <CustomBox text={'Hello TCO!'} />
        </div>
    );
}

export default Header;
