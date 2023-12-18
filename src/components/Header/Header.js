import * as React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { SpaTwoTone } from '@mui/icons-material'

const Header = (props) => {
  const { sections, title, url, navigate } = props

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          <Link
            color="inherit"
            noWrap
            underline="none"
            to={url}
            onClick={() => {
              navigate(url)
            }}
          >
            {title}
          </Link>
        </Typography>
        {sections.map((section) => (
          <span
            type="button"
            style={{ all: 'unse' }}
            onClick={() => {
              navigate(section.url)
            }}
          >
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              to={section.url}
              sx={{ p: 1, flexShrink: 0 }}
            >
              {section.title}
            </Link>
          </span>
        ))}
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default Header
