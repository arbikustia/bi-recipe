import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export default function Modal(props) {

    const { ingredients, closeModal } = props

    return (
        <div className="modal">
            {ingredients.map((data, i) =>
                <div key={i} className='modal-wraper'>
                    <div className='modal-header'>
                        <div>
                            <img src={data.recipe.image} alt="" />
                        </div>
                        <div className='description'>
                            <label>{data.recipe.label}</label>
                            <p>{data.recipe.mealType}</p>
                            <p>{data.recipe.cuisineType}</p>
                        </div>
                        <div className='wraper-close-btn'>
                            <button className='btn-close-modal'  onClick={() => closeModal()}><IoMdClose /></button>
                        </div>
                    </div>
                    <div className='modal-main'>
                        <div>
                            <p><b>ingredients</b></p>
                            <div className='ingredients'>
                                <ul>
                                    {data.recipe.ingredientLines.map((item, ind) =>
                                        <li key={ind}>{item}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p><b>total nutriens</b></p>
                            <div className='totalNutriens'>
                                <ul >
                                    {data.recipe.digest.map((item, i) =>
                                        <li key={i}>{item.label}</li>
                                    )}
                                </ul>
                                <ul className='total'>
                                    {data.recipe.digest.map((item, i) =>
                                        <li key={i}>{item.total}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <p><b>health labels</b></p>
                            <div className='healthlabels'>
                                <ul>
                                    {data.recipe.healthLabels.map((item, idx) =>
                                        <li key={idx}>{item}</li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
