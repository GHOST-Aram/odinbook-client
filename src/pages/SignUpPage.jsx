import React from 'react'
import Container from '../core-components/Container'
import MuiPaper from '../core-components/MuiPaper'
import SignUpForm from '../page-components/SignForm'

const SignUpPage = () => {
  return (
    <Container>
        <MuiPaper>
            <SignUpForm />
        </MuiPaper>
    </Container>
  )
}

export default SignUpPage