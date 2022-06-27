import React, { useState } from 'react'
import noRecipe from '../assets/noFood.png'
import Modals from './Modals'


export default function Save(props) {
    const { book, addToIngredientsFromSave, ingredientsFromSave, closeModal } = props

    return (
        <div className='save'>
            {book.length == 0 && <div className='noRecipe'> <img src={noRecipe} alt="nofood" /> <h3>You don't have a recipe yet</h3> </div>}
            <div className='save-wrap'>
                {book.map((item, i) =>
                    <div key={i} className="card-save">
                        <img src={item.recipe.image} alt="" />
                        <div className='info-highlight'>
                            <label>{item.recipe.label}</label>
                            <p>{item.recipe.mealType}</p>
                            <p>{item.recipe.cuisineType}</p>
                        </div>
                        <button onClick={() => addToIngredientsFromSave(item)}>ingredients</button>
                    </div>
                )}
            </div>
            <Modals addToIngredientsFromSave={addToIngredientsFromSave} ingredientsFromSave={ingredientsFromSave} closeModal={closeModal} />
        </div >
    )
}
