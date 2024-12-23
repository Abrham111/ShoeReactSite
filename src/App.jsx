import { useState } from 'react'
import './App.css'
import Nav from './navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import products from './datas/data'
import Card from './components/Card'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("");
  const handleInputChange = event => {
    setQuery(event.target.value)
  }
  const filteredItems = products.filter(product => product.title.toLocaleLowerCase().indexOf(query.toLowerCase()) !== -1)

  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }

  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    if (query) {
      filteredProducts = filteredItems
    }

    if (selected) {
      filteredProducts = filteredProducts.
        filter(({ color, company, newPrice, title, category }) => category === selected
          || color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
        )
    }

    return filteredProducts.map(({ img, title, reviews, prevPrice, newPrice, star }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ))
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange = {handleChange} />
      <Nav query = {query} handleInputChange = {handleInputChange} />
      <Recommended handleClick = {handleClick}/>
      <Products result = {result} />
    </>
  )
}

export default App
