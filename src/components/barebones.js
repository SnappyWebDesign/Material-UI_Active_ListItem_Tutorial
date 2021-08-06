import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"

export default function BarebonesDrawer({ children }) {
  const location = useLocation()

  let CustomListItem = ({ to, primary }) => (
    <ListItem
      button
      component={Link}
      to={to}
      selected={to === location.pathname}
    >
      <ListItemText primary={primary} />
    </ListItem>
  )

  return (
    <>
      <Drawer variant="permanent" anchor="left">
        <List>
          <CustomListItem to="/" primary="Home Page" />
          <CustomListItem to="/404" primary="404 Page" />
        </List>
      </Drawer>
    </>
  )
}
