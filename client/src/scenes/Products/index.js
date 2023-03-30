import React from 'react'
import { Box, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme, useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from 'state/api';

import Header from '../../components/Header';

function Products() {
    const { data, isLoading, error } = useGetProductsQuery();
    const isNonMobile = useMediaQuery(`min-width : 1000px`);
    // console.log('in the products component')
    // console.log('data -->\n', data);
    return (
        <Box m = '1.5rem 2.5rem'>
            <Header title = {'PRODUCTS'} subTitle = {'See your list of products'}/>
            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', p: 1, m: 1, bgcolor: 'background.paper' }}></Box> */}
            
            {/* product information */}
            {
                data || !isLoading ? (
                    <Box mt='20px' display='grid'></Box>

                ) : (<Box></Box>)
            }

        </Box>
    )
}

export default Products