import React from 'react'
import { Grid, Box } from 'grommet';

export default function MainGrid(props) {
  return (
    <Grid
      rows={['50px', 'flex']}
      columns={['flex']}
      fill
      gap="small"
      areas={[
        { name: 'navBar', start: [0, 0], end: [0, 0] },
        { name: 'main', start: [0, 1], end: [0, 1] },
      ]}
    >
      {props.children.map((child, index) => (
        <Box key={index}>
          {child}
        </Box>
      ))}
    </Grid>
  )
}
