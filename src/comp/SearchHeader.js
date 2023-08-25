function SearchHeader({ searchValue, onChange, placeholder }) {
    return (
        <div className={'pokedex__search-input'}>
            <input
                value={searchValue}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

export default SearchHeader;