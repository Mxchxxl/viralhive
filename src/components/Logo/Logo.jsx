import "./logo.scss"

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

const Logo = () =>
{
  return (
    <div className="logo-container">
      <a href="/">
        <i>
          <AlternateEmailIcon />
        </i>
        <span>viralhive</span>
      </a>
    </div>
  )
}

export default Logo
