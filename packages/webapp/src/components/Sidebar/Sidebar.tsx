import { css } from '@emotion/react'
import palette from '../../lib/palette'
import SidebarItem from '../SidebarItem'
import VeloIcon from '../VeloIcon/VeloIcon'

export type SidebarProps = {}

function Sidebar({}: SidebarProps) {
  return (
    <div css={sidebarStyle}>
      <div className="logo">velofolio</div>
      <ul css={menuStyle}>
        <SidebarItem icon="flask" text="Lab" to="/" />
        <SidebarItem icon="workspace" text="Workspace" to="/workspace" />
        <SidebarItem icon="globe" text="Explore" to="/explore" />
      </ul>
    </div>
  )
}

const sidebarStyle = css`
  flex: 1;
  .logo {
    font-weight: bold;
    font-size: 1.5rem;
    color: ${palette.blueGrey[900]};
  }
`

const menuStyle = css`
  list-style: none;
  padding: 0;
  margin-top: 5.625rem;
  margin-left: -1rem;
`

export default Sidebar