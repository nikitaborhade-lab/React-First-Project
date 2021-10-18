import React from 'react';

//import SearchBox from './SearchBox';

const SearchBox = (props) => {
    return (
        <div className='col col-sm-3'>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Search...'>
            </input>
        </div>
    );
};

export default SearchBox;