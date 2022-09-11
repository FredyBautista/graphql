import React, { useState } from "react";

const FormSearch = ({ onSubmit }) => {
    const [search, setSearch] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
        setSearch('');
    };

    const handleOnChange = event => setSearch(event.target.value);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleOnChange} value={search} />
            <input type="submit" value="Search" />
        </form>
    );
};

export default FormSearch;