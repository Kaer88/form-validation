import { useEffect, useState } from "react";

export default function useValidate(initialValues) {

    const [formInputs, setFormInputs] = useState(initialValues)
    const [isValid, setIsValid] = useState(false)
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {

        setFormInputs({
            ...formInputs,
            [e.target.name]: {
                ...formInputs[e.target.name],
                value: e.target.value
            }
        })

    }

    const checkValidate = () => {
        return Object.keys(validator).every(fieldName => {
            return validator[fieldName].every(item => item.isValid(formInputs[fieldName].value, formInputs.password?.value))
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
        const newIsValid = Object.values(formInputs).every(input => input.isValid === true)
        setIsValid(newIsValid)
        if (newIsValid) {
            let result = {};
            Object.keys(formInputs).forEach(key => {
                result[key] = formInputs[key].value
            })

            setFormData(result)
        }
    }, [formInputs])

    return {
        formInputs,
        setFormInputs,
        handleChange,
        isValid,
        reset,
        formData,
        checkValidate
    }

}