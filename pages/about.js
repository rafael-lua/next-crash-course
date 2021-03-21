import Meta from "../components/Meta"; 

const about = () => {
  return (
    <div>
      <Meta title="About" /> {/* It will not repeat, but override! */}
      <h1>About</h1>
    </div>
  )
}

export default about
