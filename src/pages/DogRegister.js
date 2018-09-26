import React, { Component } from 'react'
import axios from 'axios'

class DogRegister extends Component {
    render() {
        return(
            <form>
                <div className="form-group">
                    <input className="form-control" type="text" placeholder="Dog's Name" id="dog_name_input"></input>
                </div>
                <div className="form-group">
                    <label for="breed">What is your dog's breed</label>
                    <select className="form-control" id="exampleFormControlSelect1">
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
                </div>
                <div className="form-group">
                    <label for="size">How large is your dog?</label>
                    <select className="form-control" id="size">
                        <option value="1">Small size (0-25 kg)</option>
                        <option value="2">Medium size(26-54 pbs)</option>
                        <option value="3">Large size (55+ pbs)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="activeness">How Active is your dog?</label>
                    <select className="form-control" id="activeness">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="socialChildren">How social is your dog with children?</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="1">One (not very social)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (very social)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">How social is your dog with people?</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="1">One (not very social)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (very social)</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlSelect1">How social is your dog with other dogs?</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="1">One (not very social)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five (very social)</option>
                    </select>
                </div>
                <div className="form-group">
                <label for="exampleFormControlSelect1">Does your dog have a microchip?</label>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                        <label className="form-check-label" for="inlineRadioYes">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="0" />
                        <label className="form-check-label" for="inlineRadioNo">No</label>
                    </div>
                </div>
                <button type="button" className="btn btn-secondary">Register</button>
                <button type="reset" className="btn btn-danger">Cancel</button>

            </form>
        )
    }
}

export default DogRegister;