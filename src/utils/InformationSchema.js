import * as Yup from 'yup'

export const InformationSchema = Yup.object().shape({
    name: Yup.string()
        .required("Please enter your full name").min(2),
    email: Yup.string()
        .email("Invalid email address")
        .required("This is a required field"),
    inquiry: Yup.string()
        .required("Please sate your enquiry").min(2),
    message: Yup.string()
        .required("Please drop your message, and we will get back to you").min(2)
})