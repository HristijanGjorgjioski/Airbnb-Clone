import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core'

const Product = ({ product }) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name} />
            <CardContent>
                <div className={classes.cartContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        ${product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="textSecondary">{product.description}</Typography>
            </CardContent>
        </Card>
    )
}

export default Product
