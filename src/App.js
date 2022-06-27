import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Save from './components/Save';
import { useState } from 'react';


function App() {
  const [book, setBook] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [ingredientsFromSave, setIngredientsFromSave] = useState([])

  const saveToBook = (item) => {
    setBook([...book, item])
  }

  const addToIngredients = (item) => {
    setIngredients([...ingredients, item])
    const modal = document.querySelector(".modal")
    modal.classList.add("modal-active")
  }

  const addToIngredientsFromSave = (item) => {
    setIngredientsFromSave([...ingredientsFromSave, item ])
    const modals = document.querySelector(".modal")
    modals.classList.add("modal-active")
  }

  const closeModal = () => {
    const closeModal = document.querySelector(".modal")
    closeModal.classList.remove("modal-active")
    setIngredients([])
    setIngredientsFromSave([])
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home saveToBook={saveToBook} ingredients={ingredients} addToIngredients={addToIngredients} closeModal={closeModal} />} />
        <Route path='/save' element={<Save book={book} addToIngredientsFromSave={addToIngredientsFromSave} ingredientsFromSave={ingredientsFromSave} ingredients={ingredients} closeModal={closeModal} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
