import React from "react";

const Breed = (props) => {
    return(
        <div className="input-group">

        <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
            <option selected disabled="disabled">Choose Breed...</option>
            <option value="Alaskan Malamute">Alaskan Malamute</option>
            <option value="American Bulldog">American Bulldog</option>
            <option value="American Eskimo Dog">American Eskimo Dog</option>
            <option value="Australian Terrier">Australian Terrier</option>
            <option value="Basset Hound">Basset Hound</option>
            <option value="Beagle">Beagle</option>
            <option value="Belgian Sheepdog">Belgian Sheepdog</option>
            <option value="Bolognese">Bolognese</option>
            <option value="Boston Terrier">Boston Terrier</option>
            <option value="Bullmastiff">Bullmastiff</option>
            <option value="Cardigan Welsh Corgi">Cardigan Welsh Corgi</option>
            <option value="Chow Chow">Chow Chow</option>
            <option value="Dachshund">Dachshund</option>
            <option value="Dalmatian">Dalmatian</option>
            <option value="Doberman Pinscher">Doberman Pinscher</option>
            <option value="English Foxhound">English Foxhound</option>
            <option value="Finnish Spitz">Finnish Spitz</option>
            <option value="German Shepherd Dog">German Shepherd Dog</option>
            <option value="Great Dane">Great Dane</option>
            <option value="Greyhound">Greyhound</option>
            <option value="Icelandic Sheepdog">Icelandic Sheepdog</option>
            <option value="Jack Russell Terrier">Jack Russell Terrier</option>
            <option value="Lhasa Apso">Lhasa Apso</option>
            <option value="Mutt">Mutt</option>
            <option value="Old English Sheepdog">Old English Sheepdog</option>
            <option value="Pembroke Welsh Corgi">Pembroke Welsh Corgi</option>
            <option value="Pomeranian">Pomeranian</option>
            <option value="Pug">Pug</option>
            <option value="Shih Tzu">Shih Tzu</option>
            <option value="Yorkipoo">Yorkipoo</option>
        </select>
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>

        </div>
    )
}

export default Breed;