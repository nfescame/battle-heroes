import React from "react";
import { Pagination, Stack } from "@material-ui/core";
import { AuthContext } from "../../providers/auth";

export default function PaginationBasic() {
  const data = React.useContext(AuthContext);
  const pageNumber = [];

  for (let i = 0; i <= Math.ceil(data.totalPosts / data.postsPerPage); i++) {
    pageNumber.push(i);
  }

  const handleChange = (event, value) => {
    if (value) {
      data.setCurrentPage(value);
    }
  };

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={handleChange}
        count={pageNumber.length - 1}
        variant='outlined'
      />
    </Stack>
  );
}
