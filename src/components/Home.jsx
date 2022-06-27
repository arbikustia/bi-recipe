import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import Search from './Search'
import Modal from './Modal'

export default function Home(props) {
    const { saveToBook, addToIngredients, closeModal, ingredients } = props

    return (
        <>
            <Banner />
            <Search saveToBook={saveToBook} addToIngredients={addToIngredients} />
            <Modal addToIngredients={addToIngredients} ingredients={ingredients}  closeModal={closeModal}  />
            <Footer />
        </>
    )
}
