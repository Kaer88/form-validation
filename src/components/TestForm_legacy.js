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

const validateAllInputs = (formData) => {
    return Object.values(formData).every(input => input.isValid === true)

}

export default function TestForm() {

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateAllInputs(formInputs)) {
            console.log("minden jó")
        } else {
            console.log("nincs ez így jól")
        }

    }

    return (

        <Form className="container" onSubmit={handleSubmit} >
            <TextInput
                type="text"
                name="email"
                onChange={handleChange}
                value={formInputs.email.value}
                label="E-mail"
                setFormInputs={setFormInputs}

            />
            <TextInput
                type="password"
                name="password"
                onChange={handleChange}
                value={formInputs.password.value}
                label="Jelszó"
                setFormInputs={setFormInputs}

            />
            <TextInput
                type="number"
                name="number"
                onChange={handleChange}
                value={formInputs.number.value}
                setFormInputs={setFormInputs}
                label="Szám"

            />
            <Button className="mt-3" type="primary">Küldés</Button>
        </Form>
    )


}