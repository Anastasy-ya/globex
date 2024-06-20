import React from "react";
import Box from '@mui/material/Box';
import Input from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import searchIcon from '../../images/search-icon.svg';
import FormControl, { useFormControl } from '@mui/material/FormControl';

export default function CustomizedInput() {
  return (
    <Box>
      <Box
        component="form"
        sx={{
          p: "2px 18px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "48px",
          border: "solid rgba(212, 222, 254, 1) 1px", /* TODO primary.lightGrey */
          borderRadius: "24px",
          boxSizing: "border-box",
          minWidth: "300px",
          transition: "background-color .5s",
          '&:hover': {
            bgcolor: 'primary.lightGrey',
            transition: "background-color .5s",
          },
        }}
      >
        <Input
          aria-label="Введите имя"
          type="text"
          // value=""
          // onChange=""
          // required
          // minLength="2"
          // maxLength="50"
          autoFocus={true}
          // pattern={pattern}
          id="search"
          placeholder="Введите имя"
          sx={{
            ml: "2px",
            flex: 1,
            transition: "background-color .5s",
            width: "100%",
            height: "40px",
            border: "none",
            '&:hover': {
              bgcolor: "primary.lightGrey",
              transition: "background-color .5s",
            }
          }}

        />
        <IconButton
          alt="Найти сотрудника"
          type="submit"
          sx={{
            width: "30px",
            height: "20px",
            backgroundImage: `url(${searchIcon})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-label="Найти сотрудника">
        </IconButton>
      </Box>
    </Box>
  );
}