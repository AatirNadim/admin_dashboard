import React from 'react'
import {
  Box, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme, useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from 'state/api';

import Header from '../../components/Header';

const Product = ({ _id, name, description, price, rating, category, supply, stat }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = React.useState(false);
  // console.log(stat);
  return (
    <Card
      sx={{
        backgroundImage: 'none',
        backgroundColor: theme.palette.background.alt,
        borderRadius: '0.55rem',
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            color: theme.palette.secondary[700],
          }}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant='h5' component='div'  > {name} </Typography>
        <Typography color={theme.palette.secondary[400]} mb='1.5rem'>$ {Number(price).toFixed(2)} </Typography>
        <Rating   value={rating} readOnly></Rating>
        <Typography variant='body'>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button variant='primary' onClick={() => {
          setIsExpanded(!isExpanded)
        }}>See more text</Button>
      </CardActions>
      <Collapse in={isExpanded} timeout='auto' unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography  >id : {_id}</Typography>
          <Typography  >Supply_Left : {supply}</Typography>
          <Typography  >Yearly sales this year : {stat.yearlySalesTotal}</Typography>
          <Typography  >Yearly units sold this year : {stat.yearlyTotalSoldUnits}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function Products() {
  const { data, isLoading, error } = useGetProductsQuery();
  // if(data) console.log(typeof data);
  const isNonMobile = useMediaQuery(`(min-width : 1000px)`);
  // React.useEffect(() => {
  //   console.log('mobile screen ', !isNonMobile);
  // }, [isNonMobile])
  
  // console.log('in the products component')
  // console.log('data -->\n', data);
  return (
    <Box m='1.5rem 2.5rem'>
      <Header title={'PRODUCTS'} subTitle={'See your list of products'} />
      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', p: 1, m: 1, bgcolor: 'background.paper' }}></Box> */}

      {/* product information */}
      {
        data || !isLoading ? (
          // set of columns split into 4, minmax of 1fractional unit as maximum value
          <Box mt='20px' display='grid' gridTemplateColumns='repeat(4, minmax(0, 1fr))'
            justifyContent='space-between'
            rowGap='20px' columnGap='1.33%'
            sx={{
              // take the entire width when on mobile screen
              '& > div': {
                gridColumn: isNonMobile ? '' : 'span 4'
              }
            }}
          >

            {
              data.map(({ _id, name, description, price, rating, category, supply, stat }) => {
                return <Product key={_id}
                  _id={_id}
                  name={name}
                  description={description}
                  price={price}
                  rating={rating}
                  category={category}
                  supply={supply}
                  stat={stat[0]} />
              })
            }
          </Box>

        ) : (<Box>Loading...</Box>)
      }

    </Box>
  )
}

export default Products