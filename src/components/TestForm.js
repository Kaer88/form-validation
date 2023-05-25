
import TextInput from "./TextInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useValidate from "../hooks/useValidate";
import validator from "../util/validator";
import validate from "../util/validator";
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

    const { formInputs, setFormInputs, handleChange, isValid, reset, formData } = useValidate(initialValues, validate)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            console.log(formData)
            reset()
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
                values={formInputs}
                label="E-mail"
                setFormInputs={setFormInputs}
                validate={validate}

            />
            <TextInput
                type="password"
                name="password"
                onChange={handleChange}
                values={formInputs}
                label="Jelszó"
                setFormInputs={setFormInputs}
                validate={validate}

            />
            <TextInput
                type="number"
                name="number"
                onChange={handleChange}
                values={formInputs}
                setFormInputs={setFormInputs}
                label="Szám"
                validate={validate}

            />
            <Button className="mt-3" type="primary">Küldés</Button>
        </Form>
    )


}