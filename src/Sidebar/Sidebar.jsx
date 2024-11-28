import './Sidebar.css'
import Category from './Category'
import  Price from './Price'
import Colors from './Colors'

const Sidebar = () => {
  return (
    <>
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Category />
      <Price />
      <Colors />
    </section>
    </>
  )
}

export default Sidebar