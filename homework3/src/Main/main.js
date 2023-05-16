import SearchBox from './searchComponent';
import ShowUsers from './userList';

export default function Main() {
    return (
        <div className="main">
            <SearchBox />
            <ShowUsers />
        </div>
    );
}