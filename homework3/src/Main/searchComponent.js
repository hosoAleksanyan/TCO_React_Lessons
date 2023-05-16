import { useState } from 'react';

export default function SearchBox() {

    const [searchName, setSearchName] = useState('');

    function handleSearch(evt) {
        setSearchName(evt.target.value)
    }

    function search() {
        let result = 'Name: ' + searchName;
        alert(result);
    }

    return (
        <div className='searchBox'>
            <button onClick={search}>Search</button>
            <input type="text" onChange={(Event) => handleSearch(Event)} />
            <p>{searchName}</p>
        </div>
    );
}