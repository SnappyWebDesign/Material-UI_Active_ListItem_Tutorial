import * as React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Drawer from "./DrawerDemo"
import Barebones from "./barebones"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#26a27b"
    }
  }
})

const Layout = ({ children, ft }) => {
  return (
    <ThemeProvider theme={theme}>
      <Drawer children={children} />
      {/* <Barebones /> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1.0875rem 1.45rem`
        }}
      >
        {/* <main>{children}</main> */}
      </div>
      {(ft === "t" ? true : null) && (
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            width: "100vw",
            maxWidth: "100%",
            padding: 0,
            margin: 0,
            backgroundColor: "#26a27b"
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginTop: "1em",
              color: "white",
              textDecoration: "none",
              marginBottom: "1em"
            }}
          >
            <a
              href="https://snappywebdesign.net/"
              style={{
                textDecoration: "none",
                color: "#FFF",
                paddingBottom: 3,
                borderBottom: `1px solid white`
              }}
            >
              via Snappy Web Design
            </a>
          </div>
        </footer>
      )}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  ft: PropTypes.string.isRequired
}
Layout.defaultProps = {
  ft: "t"
}
export default Layout
