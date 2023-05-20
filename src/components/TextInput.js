import { useState } from "react";
import Form from "react-bootstrap/Form";
import validate from "../util/validator";

export default function TextInput({ label, type, name, value, onChange }) {

    const [isValidInput, setIsValidInput] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isTouched, setIsTouhed] = useState(false)


    const handleValidate = () => {
        setIsTouhed(true);
        const invalid = validate[name].find(validator => !validator.isValid(value))

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
        setIsValidForm(prev => ({
            ...prev,
            [name]: isValidInput
        }))
        onChange(e);
    }

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={value}
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