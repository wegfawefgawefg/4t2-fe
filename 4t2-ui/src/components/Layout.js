import React from 'react'
import { Container } from '@mui/material'


import ResponsiveAppBar from './ResponsiveAppBar'


export default function Layout({ children }) {
    return (
        <Container>
            <ResponsiveAppBar />
            {children}
        </Container>
    )

}