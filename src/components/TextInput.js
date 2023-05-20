import Form from "react-bootstrap/Form";

export default function TextInput({ isValid, isInvalid, label, type, errorMsg, name, value, onChange }) {

    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                isValid={isValid}
                isInvalid={isInvalid}
            />
            <Form.Control.Feedback>
                {errorMsg}
            </Form.Control.Feedback>
        </Form.Group>
    )
}