import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";


export default function TextInput({ label, type, name, values, onChange, setFormInputs, validate }) {

    const [isValidInput, setIsValidInput] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isTouched, setIsTouched] = useState(false)

    const handleValidate = () => {
        setIsTouched(true);
        const invalid = validate[name].find(validator => !validator.isValid(values[name].value))

        if (invalid) {
            setIsValidInput(false)
            setErrorMessage(invalid.message)
        } else {
            setIsValidInput(true);
            setErrorMessage("");
        }

    }

    const realTimeValidate = (e) => {
        if (isTouched) handleValidate();
        onChange(e);
    }

    useEffect(() => {
        setFormInputs(prev => ({
            ...prev,
            [name]: {
                ...prev[name],
                isValid: isValidInput
            }

        }))
    }, [isValidInput])

    useEffect(() => {
        if(values[name].value === "") {
            setIsValidInput(false);
            setIsTouched(false)
        }
    }, [values[name].isValid])



    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={values? values[name].value : undefined}
                onChange={realTimeValidate}
                isValid={isValidInput}
                isInvalid={errorMessage ? true : false}
                onBlur={handleValidate}
            />
            <Form.Control.Feedback type="invalid">
                {errorMessage}
            </Form.Control.Feedback>
        </Form.Group>
    )
}