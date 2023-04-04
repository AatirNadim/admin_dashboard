import React from 'react'
import { Box , useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useGetTransationsQuery } from 'state/api'
import Header from 'components/Header'



const Transactions = () => {
  const theme = useTheme();
  // value to send to the backend
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(20);
  const [sort, setSort] = React.useState({})
  const [search, setSearch] = React.useState('')

  const { data, isLoading, error } = useGetTransationsQuery({page, 
    pageSize, 
    sort : JSON.stringify(sort), 
    search});

  // React.useEffect(() => {
  //   console.log('data -->', data)
  // }, [data])
  
  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1
    },
    {
      field: 'userId',
      headerName: 'User ID',
      flex: 1,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      flex: 1,
    },
    {
      field: 'products',
      headerName: 'Products',
      flex: 0.5,
      sortable : false,
      renderCell: (params) => {
        return params.value.length
      },
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell :(params) => `$${Number(params.value).toFixed(2)}`
    },
  ];

  return (
    <Box m='1.5rem 2.5rem' >
      <Header title={'TRANSACTIONS'} subTitle={'List of transactions'} />
      <Box  height='80vh' 
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid  
          loading = {isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || [] }
          columns={columns}
          
        />
      </Box>
    </Box>
  )
}

export default Transactions