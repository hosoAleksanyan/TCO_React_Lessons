import CustomBox from './components/customBox';
import CustomButton from './components/customButton';
function Main() {
    return (
        <div style={{ padding: '5px', border: '3px solid blue', textAlign: 'center', margin: '10px auto', width: '75%' }}>
            <h2>Main</h2>
            <CustomButton title={'Main Button'} />
            <CustomBox text={'Hello SpaceX!'} />
        </div>
    )
}

export default Main;