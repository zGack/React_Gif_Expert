import PropTypes from 'prop-types'
import {useState} from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        const newInputValue = inputValue.trim();

        event.preventDefault(); // evite que se recarge la pagina al enviar el form

        if (newInputValue.length > 1) {
            onNewCategory(newInputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input type='text'
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={onInputChange}>
            </input>
        </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
