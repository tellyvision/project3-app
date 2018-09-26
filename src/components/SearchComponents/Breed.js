import React from "react";

const Breed = (props) => {
    return(
        <div className="input-group">

        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected disabled="disabled">Choose Breed...</option>
            <option value="Appenzeller Sennenhunde">Appenzeller Sennenhunde</option>
            <option value="Beagle">Beagle</option>
            <option value="Bulldog">Bulldog</option>
            <option value="Cattledog">Cattledog</option>
            <option value="Chowchow">ChowChow</option>
            <option value="Collie">Collie</option>
            <option value="Corgi">Corgi</option>
            <option value="Dalmatian">Dalmatian</option>
            <option value="EskimoDog">Eskimo Dog</option>
            <option value="Hound">Hound</option>
            <option value="Mastiff">Mastiff</option>
            <option value="Mutt">Mutt</option>
            <option value="Pinocher">Pinocher</option>
            <option value="Pomeranian">Pomeranian</option>
            <option value="Pug">Pug</option>
            <option value="Retriever">Retriever</option>
            <option value="Sheepdog">Sheepdog</option>
            <option value="SheppardDog">Sheppard Dog</option>
            <option value="Terrier">Terrier</option>
            <option value="ShihTzu">Shih Tzu</option>
            <option value="Spaniel">Spaniel</option>
            <option value="Terrier">Terrier</option>
            <option value="Yorkipoo">Yorkipoo</option>
        </select>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>

        </div>
    )
}

export default Breed;