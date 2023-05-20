import { useState } from "react";

export default function useValidate(initialValues) {

    const [formInputs, setFormInputs] = useState(initialValues)

    const handleChange = (e) => {

        setFormInputs({
            ...formInputs,
            [e.target.name]: {
                ...formInputs[e.target.name],
                value: e.target.value
            }
        })

    }

    const reset = () => {
        let output = {};
        Object.keys(formInputs).forEach(formItem => {
            output[formItem] = {
                value: "",
                isValid: false
            }

        })
        setFormInputs(output)
    }

    const validateAllInputs = () => {
        return Object.values(formInputs).every(input => input.isValid === true)

    }

    return {
        formInputs,
        setFormInputs,
        handleChange,
        isValid: validateAllInputs,
        reset
    }

}