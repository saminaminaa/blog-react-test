import React, {useState, useRef} from 'react'
import './Form.css'
import {useDispatch} from 'react-redux'

export default function Form() {

    //On est pas tjrs obligé de lier le state avec le formulaire, il y a d'autres techniques
    /* const[article, setArticle] = useState({
        title: "",
        body: ""
    }) */

    const dispatch = useDispatch();

    const handleForm = (e) => {
        e.preventDefault();

        const newArticle = {
            title: inputsRef.current[0].value,
            body: inputsRef.current[1].value,
        }

        dispatch({
            type: 'ADDARTICLE',
            payload: newArticle
        });
/*         setArticle({
            title: "",
            body: ""
        }) */
        e.target.reset()//methode js pour remettre à 0 des inputs
    }

/*     const handleInputs = e => {//Fonction qui met à jour le state à chaque fois que j'ecris à l'interieur
        if(e.target.classList.contains('inp-title')){
            const newObjState = {...article, title: e.target.value};
            setArticle(newObjState);
        } else if(e.target.classList.contains('inp-body')){
            const newObjState = {...article, body: e.target.value};
            setArticle(newObjState);
        }
    } */

    const inputsRef = useRef([]);

    const addRefs = (el) => {
        if(el && !inputsRef.current.includes(el)){
            inputsRef.current.push(el)
        }
    };

    console.log(inputsRef);
    return (
        <div>
            <h1 className="title-form">Ecrivez un article</h1>
        
            <form onSubmit={handleForm} className="container-form">
                <label htmlFor="title">Titre</label>
                <input 
                /* onChange={handleInputs}
                value={article.title} */
                ref={addRefs}
                type="text"
                id="title" 
                placeholder="Entrez votre nom" 
                className="inp-title"/>

                <label htmlFor="title">Votre article</label>
                <textarea ref={addRefs}/* onChange={handleInputs} value={article.body} */ id="article" placeholder="Votre article" className="inp-body"></textarea>
                
                <button>Envoyez l'article</button>
            </form>
        
        </div>
    )
}
