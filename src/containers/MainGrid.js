import React from 'react'
import { Grid, Box } from 'grommet';

export default function MainGrid(props) {
  return (
    <Grid
      rows={['50px', 'flex']}
      columns={['flex']}
      fill
      gap="none"
      areas={[
        { name: 'navBar', start: [0, 0], end: [0, 0] },
        { name: 'mainWrap', start: [0, 1], end: [0, 1] },
      ]}
    >
      <Box key={props.children[0].props.name} gridArea={props.children[0].props.name}>
        {props.children[0]}
      </Box>
      <Grid
        gridArea="mainWrap"
        rows={['flex']}
        columns={['medium', 'flex']}
        gap="small"
        margin="small"
        areas={[
          { name: 'sideBar', start: [0, 0], end: [0, 0] },
          { name: 'main', start: [1, 0], end: [1, 0] },
        ]}
      >
        {props.children.slice(1).map((child, index) => (
          <Box key={index} 
            className="mainElement"
            gridArea={child.props.name}
            pad="small"
            round="xsmall"
          >
            {child}
          </Box>
        ))}
      </Grid>
    </Grid>
  )
}
