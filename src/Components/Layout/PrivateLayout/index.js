import { Layout } from 'Components/UI-Library'
import Dashboard from './Dashboard'

const { Content } = Layout

const PrivateLayout = (props) => {
  return (
    <Dashboard className="pp_layout">
      <Content className="pp_container">{props.children}</Content>
    </Dashboard>
  )
}

export default PrivateLayout
