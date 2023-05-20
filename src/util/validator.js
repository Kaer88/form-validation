import validator from "validator"

const validate = {
    email: [
        {
            isValid: (value) => !validator.isEmpty(value),
            message: "kitöltés kötelező",
        },
        {
            isValid: (value) => validator.isEmail(value),
            message: "Ez nem email cím!",
        }
    ],
    password: [
        {
            isValid: (value) => !validator.isEmpty(value),
            message: "kitöltés kötelező",
        },
        {
            isValid: (value) => validator.isStrongPassword(value),
            message: "Nem elég erős a jelszó",
        },
    ],
    number: [
        {
            isValid: (value) => !validator.isEmpty(value),
            message: "kitöltés kötelező",
        },
        {
            isValid: (value) => validator.isNumeric(value.toString()),
            message: "Ez nem szám, nem tudom hogy",
        },
    ]
}



export default validate