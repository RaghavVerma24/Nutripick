import React from 'react'
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <p>Description: {}</p>
            <ol className={style.list}>
                {ingredients.map(ingredients =>(
                    <ol>{ingredients.text}</ol>
                ))}
            </ol>
            <p>Calories: {calories}</p>
            <p>Location: {}</p>
            <img className={style.image} src={image} alt=""/>
        </div>
    )
}

export default Recipe;