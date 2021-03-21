import Meta from "./Meta"; 
import Nav from "./Nav"; 
import Header from "./Header"; 
import styles from "../styles/Layout.module.css"; 

const Layout = (props) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {props.children} {/* This is the whole app coming from _app */}
        </main>      
      </div>
    </>
  )
}

export default Layout
