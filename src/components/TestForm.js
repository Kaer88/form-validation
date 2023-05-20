import { useState } from "react";
import TextInput from "./TextInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const initialValues = {
    email: {
        value: "",
        isValid: false
    },
    password: {
        value: "",
        isValid: false
    },
    number: {
        value: "",
        isValid: false
    },

}

export default function TestForm() {

    const [formInputs, setFormInputs] = useState(initialValues)

    const handleChange = (e) => {

        setFormInputs({
            ...formInputs,
            [e.target.name]: {
                ...formInputs[e.target.name],
                value : e.target.value
            }
        })

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValidForm) return;

    }

    return (

        <Form className="container" onSubmit={handleSubmit} >
            <TextInput
                type="text"
                name="email"
                onChange={handleChange}
                value={formValues.email}
                label="E-mail"
                setIsValidForm={setIsValidForm}

            />
            <TextInput
                type="password"
                name="password"
                onChange={handleChange}
                value={formValues.password}
                label="Jelszó"
                setIsValidForm={setIsValidForm}

            />
            <TextInput
                type="number"
                name="number"
                onChange={handleChange}
                value={formValues.number}
                setIsValidForm={setIsValidForm}
                label="Szám"

            />
            <Button className="mt-3" type="primary">Küldés</Button>
        </Form>
    )


}