import React from 'react'
import { Formik } from 'formik'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import InputField from "../components/FormFields/InputFields";
import CustomForm from '../components/FormFields/CustomForm'
import { Grid } from '@mui/material';
import { InformationSchema } from "../utils/InformationSchema"
import { makeStyles } from '@mui/styles'
import SelectField from './FormFields/SelectFiels';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        '&  makeStyles-root-3 .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            border: ''
        }
    }
}));

const data = [
    { name: 'General Information Request' },
    { name: 'Partners Relations' },
    { name: 'Software Licencing' }
]

const GetInformation = () => {
    const classes = useStyles()
    return (
        <React.Fragment>
            <Container fluid className="footer">
                <Container fluid className={classes.root}>
                    <Row className="pb-4 pt-5">
                        <Col md={1}></Col>
                        <Col md={4} >
                            <h3 className="information">Need further information from experienced staff?</h3>
                            <div>
                                <Formik
                                    initialValues={{
                                        name: '',
                                        email: '',
                                        inquiry: '',
                                        message: ''
                                    }}
                                    validationSchema={InformationSchema}
                                >
                                    {({ isSubmitting }) => (
                                        <CustomForm>
                                            <Grid container spacing={3} >
                                                <Grid item xs={12} md={6} >
                                                    <InputField
                                                        fullWidth
                                                        name="name"
                                                        labelName="Name"
                                                    />
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <InputField
                                                        fullWidth
                                                        name="email"
                                                        labelName="Email address"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <SelectField
                                                        fullWidth
                                                        name="inquiry"
                                                        label=" Your Inquiry About"
                                                        data={data}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <InputField
                                                        fullWidth
                                                        name="message"
                                                        labelName="Please describe what you need"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <button type="submit"
                                                        disabled={isSubmitting} className="btn-consultation">get free consultation</button>
                                                </Grid>
                                            </Grid>
                                        </CustomForm>
                                    )}
                                </Formik>
                            </div>
                        </Col>
                        <Col md={1}></Col>

                        <Col md={2}>
                            <h3 className="information">Support</h3>
                            <div>
                                < Nav.Link className="nav-item3" href="#Home">Help Desk</Nav.Link>
                                < Nav.Link className="nav-item3" href="#Home">Contact Us</Nav.Link>
                            </div>
                        </Col>
                        <Col md={2}>
                            <h3 className="information">Developers</h3>
                            <div>
                                < Nav.Link className="nav-item3" href="#Home">Overview</Nav.Link>
                                < Nav.Link className="nav-item3" href="#Home">Documentation</Nav.Link>
                                < Nav.Link className="nav-item3" href="#Home">Status</Nav.Link>
                            </div>
                        </Col>
                        <Col md={2}>
                            <h3 className="information">About</h3>
                            <div>
                                < Nav.Link className="nav-item3" href="#Home">Company</Nav.Link>
                                < Nav.Link className="nav-item3" href="#Home">Pricing</Nav.Link>
                                < Nav.Link className="nav-item3" href="#Home">Privacy and Terms</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default GetInformation
