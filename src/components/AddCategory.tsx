import { FormEvent, useState } from 'react'

export const AddCategory = ({ onNewCategory }: Props) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (inputValue.trim().length < 3) {
            return;
        }

        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Escribe aquí"
                value={inputValue}
                onChange={onInputChange}
            />
            <input type="submit" value="Añadir" />
        </form>
    )
}

type Props = {
    onNewCategory: CallableFunction
};