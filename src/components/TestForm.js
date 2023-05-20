
import TextInput from "./TextInput";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useValidate from "../hooks/useValidate";

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

    const { formInputs, setFormInputs, handleChange, isValid, reset } = useValidate(initialValues)
    console.log("hahó!", formInputs)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid()) {
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

            />
            <TextInput
                type="password"
                name="password"
                onChange={handleChange}
                values={formInputs}
                label="Jelszó"
                setFormInputs={setFormInputs}

            />
            <TextInput
                type="number"
                name="number"
                onChange={handleChange}
                values={formInputs}
                setFormInputs={setFormInputs}
                label="Szám"

            />
            <Button className="mt-3" type="primary">Küldés</Button>
        </Form>
    )


}