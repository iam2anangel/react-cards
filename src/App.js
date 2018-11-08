//npm install for dependencies
//react likes null if not there; absent of object
//this assessment sucks
import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */
const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
        <div className="card__description cardGroup__cardDescription">
            <div className={`icon fa ${props.icon} card__descriptionIcon`} />
                <div className="card__descriptionText">
                {props.description}
                {props.hint && <br/>><p>({props.hint})</p>} 
                </div>
            <div className="card__price">{props.price}</div>
        </div>
    </div>
);

const App = () => (
    <CardGroup>
        <Card description="Trial" price="Free!" icon="fa-thumbs-o-up"/>
        <Card description="Basic tier" hint="most popular" icon="fa-trophy" price="$10.00"/>
        <Card description="Advanced tier" hint="only for enterprise-level professionals" icon="fa-bolt" price="$6,000"/>
    </CardGroup>
);

export default App;

