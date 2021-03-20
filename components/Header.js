import headerStyles from "../styles/Header.module.css"; 

const Header = () => {
  const color = Math.random();

  return (
    <div>
      {/* You can use use dynamic stylling with the css module, since it is just returning a string class name */}
      <h1 className={headerStyles.title + " " + (color <= 0.5 ? headerStyles.title2 : null)}> <span>Dev</span> News</h1>
      <p className={headerStyles.description}>Keep up to date with the latest dev news!</p>
    </div>
  )
}

export default Header
