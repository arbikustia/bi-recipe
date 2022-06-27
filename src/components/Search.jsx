import React, { useState } from 'react'
import searchImg from '../assets/Search.png'
import { FaUtensilSpoon } from 'react-icons/fa'
import axios from 'axios'
import noFood from '../assets/bookRecipe.png'




export default function Search(props) {
    const { saveToBook,addToIngredients } = props
    const [search, setSearch] = useState("")
    const [dataSearch, setDataSearch] = useState([])

    const findFood = (event) => {
        setDataSearch([])
        event.preventDefault()
        axios({
            method: "GET",
            url: `https://api.edamam.com/api/recipes/v2?q=${search}&app_id=5988fb72&app_key=f29a4b96720fd075531ba0ef84177d07&type=public&=`,
        }).then((result) => {
            setDataSearch(result.data.hits)
        })
        setSearch("")
    }

    return (
        <div className='search'>
            <form>
                <img className='searchImg' src={searchImg} alt="" />
                <div className='searchWrap'>
                    <input className='searchInput' value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Find food recipe' />
                    <button className='searchBtn' onClick={(event) => findFood(event)}><FaUtensilSpoon /></button>
                </div>
            </form>
            <main>
                {dataSearch.length == 0 && <div className='nofood'> <img src={noFood} alt="no food" /> <h2>FIND RECIPE NOW!</h2>  </div>}
                <div className='card-wrap'>
                    {dataSearch.map((item, i) =>
                        <div key={i} className="card">
                            <img src={item.recipe.image} />
                            <div className='label-wrap'>
                                <label key={i}><b>{item.recipe.label}</b></label>
                            </div>
                            <button className='btn-card' onClick={() => saveToBook(item)} >save to book</button>
                            
                            <button className="btn-card" onClick={() => addToIngredients(item)}   >ingredients</button>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
