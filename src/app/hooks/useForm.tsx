import { ChangeEvent, useState } from 'react';

const useForm = ( init = {} ):Array<any> => {
    

    const [ values, setValues ] = useState( init );

    const onChangeInput = (event:ChangeEvent) => {
        let { type,checked,value,name } = event.target as HTMLInputElement;
        const val = type && type === 'checkbox' ? checked : value;
    
        setValues((prevState) => {
            return {
                ...prevState,
                [name]: val
            }
        });
      }
    const reset = () => setValues(init)

    return [
        values,
        onChangeInput,
        reset
    ]
}

export default useForm;