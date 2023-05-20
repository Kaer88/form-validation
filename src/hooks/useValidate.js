import { useEffect, useState } from "react";

export default function useValidate(initialValues) {

    const [formInputs, setFormInputs] = useState(initialValues)
    const [isValid, setIsValid] = useState(false)

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

    useEffect(() => {
        setIsValid(Object.values(formInputs).every(input => input.isValid === true))

    }, [formInputs])

    return {
        formInputs,
        setFormInputs,
        handleChange,
        isValid,
        reset
    }

}