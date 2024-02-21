'use client';

import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  setValue: Function;
  value: string;
  isLoading: boolean;
};

const SearchInput = (props: Props) => {
  const { setValue, value, isLoading } = props;

  return (
    <FormControl variant='standard'>
      <InputLabel htmlFor='searchBlog'>search</InputLabel>
      <Input
        id='searchBlog'
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton aria-label='search blogs'>
              {isLoading ? <CircularProgress size={24} /> : <SearchIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchInput;
