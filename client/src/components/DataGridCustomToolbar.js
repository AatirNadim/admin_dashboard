import React from 'react'
import { Search } from '@mui/icons-material'
import { IconButton, TextField, InputAdornment } from '@mui/material'
import { GridToolbarDensitySelector, GridToolbarContainer, GridToolbarExport, 
    GridToolbarColumnsButton
} from '@mui/x-data-grid'

import FlexBetween from './FlexBetween'

const DataGridCustomToolbar = ({searchInput, setSearchInput, setSearch}) => {
  return (
    <GridToolbarContainer  >
        <FlexBetween  >
            <GridToolbarColumnsButton  />
            </FlexBetween>        
    </GridToolbarContainer>
  )
}

export default DataGridCustomToolbar