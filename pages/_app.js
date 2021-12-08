import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import {Navbar, NavbarBrand} from 'shards-react'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout
  return (
  <div>
    <Navbar theme="primary" type="dark">
      <NavbarBrand>
        Demo
      </NavbarBrand>
    </Navbar>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </div>
  )
}

const EmptyLayout = ({children}) => <>{children}</>;

export default MyApp
