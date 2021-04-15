import { Container, Typography } from '@material-ui/core'
import React from 'react'

const Cart = () => {
    const isEmpty = true;
    
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title}>Your Shopping Cart</Typography>
        </Container>
    )
}

export default Cart
