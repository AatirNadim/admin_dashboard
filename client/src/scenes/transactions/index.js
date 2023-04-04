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
    <div>Transactions</div>
  )
}

export default Transactions