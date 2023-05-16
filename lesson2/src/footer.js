import CustomBox from "./components/customBox";
import CustomButton from "./components/customButton";
function Footer() {
    return (
        <div style={{ padding: '5px', border: '3px solid orange', textAlign: 'center', margin: '10px auto', width: '75%' }}>
            <h2>Footer</h2>
            <CustomButton title={'Footer Button'} />
            <CustomBox text={'Hello NASA!'} />
        </div>
    )
}

export default Footer;