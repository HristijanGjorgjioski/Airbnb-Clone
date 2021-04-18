import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomTextField';

const AdressForm = () => {
    const methods = useForm();

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Adress</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First Name' />
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AdressForm
