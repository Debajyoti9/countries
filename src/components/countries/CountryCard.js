import React from 'react'
import '../countries/CountryCard.css';
function CountryCard({name,capital,flag,region,subRegion,borders,languages,population}) {
    var border = '[ ';
    for(var key in borders){
        border+=borders[key]+" ";
    }
    border+=']';

    var language = "[ ";

    for(var k in languages){
        language+=languages[k]+" ";
    }
    language+="]";
    return (
        <>
            <div className="countryCard">
                <div className="countryCard_inner">
                    <div className="countryCard_front">
                        <img src={flag} alt={name}/>
                        <h3>Name Of The Country :<span>{name}</span></h3>
                    </div>
                    <div className="countryCard_back">
                        <div className="countryCard_back_capital">
                        <h3><span>Capital :</span></h3>
                         <p> {capital}</p>
                        </div>
                         <div className="countryCard_back_region">
                         <h3><span>Region :</span></h3>
                         <p> {region}</p>
                         </div>
                         <div className="countryCard_back_subregion">
                         <h3><span>Subregion :</span></h3>
                         <p> {subRegion}</p>
                         </div>
                         <div className="countryCard_back_population">
                         <h3><span>Population :</span></h3>
                         <p> {population}</p>
                         </div>
                         <div className="countryCard_back_borders">
                         <h3><span>Borders :</span></h3>
                         <p>{border}</p>
                         </div>
                         <div className="countryCard_back_languages">
                         <h3><span>Languages :</span></h3>
                         <p>{language}</p>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryCard
