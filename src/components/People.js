import React, { useState } from 'react'
import { Data } from '../Data'

const People = () => {
    const [searchTerm ,setSearchTerm] = useState('');
    const [ searchResults, setSearchResults] = useState([]);

const handleChange =(e) =>{
    setSearchTerm(e.target.value);
};
React.useEffect(() =>{
    const results = Data.filter(person => person.first_name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
},[searchTerm])


    return (
        <div className='people'>
                <input  
                type="text" 
                value={searchTerm}
                onChange={handleChange} 
                placeholder='search...'
                />
                <div className="list">
                    {
                        searchResults.map((person, key) =>{
                            const {id, first_name, last_name} = person;
                            return(
                            <div key={id} className="list">
                                <h1>{ first_name }</h1>
                                <h1>{ last_name}</h1>
                            </div>
                            );
                        })
                    }
                </div>
        </div>
    )
}

export default People
