import './App.css';
import React, {useState} from "react";

function App() {
    const [blitz, setBlitz] = useState(true);
    const [spezial, setSpezial] = useState([false, false]);
    const [portrait, setPortrait] = useState(false);
    const [gaTypes] = useState([
        "GA Erwachsene 25-64/65 Jahre",
        "GA Senior ab 64/65 Jahren",
        "GA Junior16-25 Jahre",
        "GA Junior Studierende 25 - 30 Jahre",
        "GA Reisende mit einer Behinderung",
        "GA Kind 6-16 Jahre",
        "GA Duo Partner",
        "GA Famillia Kind 6-16 Jahre",
        "GA Famillia Jugend 16-25 Jahre",
        "GA Famillia Partner"
    ]);
    const [gaPrice] = useState([
        [ //Jährlich
            [3860, 2880, 2650, 2650, 2480, 1645, 2700, 680, 925, 2180], //2.
            [6300, 4840, 4520, 4520, 4050, 2760, 4340, 2760, 2790, 3520] //1.
        ],
        [ //Monatlich
            [340, 260, 245, 245, 225, 160, 245, 75, 95, 200], //2.
            [545, 430, 405, 405, 355, 250, 380, 250, 255, 310] //1.
        ]
    ]);
    const [gaTypeBooleans, setGaTypesBooleans] = useState([true, false, false, false, false, false, false, false, false, false]);
    const [gaKlasse, setGaKlasse] = useState(true);
    const [gaZahlung, setGaZahlung] = useState(true);

    const handleSpezialChange = (id) => {
        setSpezial([id === 0 ? !spezial[0] : spezial[0], id === 1 ? !spezial[1] : spezial[1]])
    }

    const handleGaTypesChange = (id) => {
        setGaTypesBooleans([id === 0, id === 1, id === 2, id === 3, id === 4, id === 5, id === 6, id === 7, id === 8, id === 9]);
    }

    const handleGaKlasseChange = (id) => {
        setGaKlasse(id === 0);
    }

    const handleGaZahlungChange = (id) => {
        setGaZahlung(id === 0);
    }

    const getGaPreis = () => {
        let gaKlasseZahl = 0;

        for (let i = 0; i < gaTypeBooleans.length; i++){
            if (gaTypeBooleans[i]){
                gaKlasseZahl = i;
                break;
            }
        }

        return gaPrice[gaZahlung ? 1 : 0][gaKlasse ? 1 : 0][gaKlasseZahl];
    }

    return (
        <div className="App">
            <h3>Blitz</h3>
            <label>Ein</label>
            <input type="radio" name="Blitz" checked={blitz} onChange={() => setBlitz(true)}/>
            <br/>
            <label>Aus</label>
            <input type="radio" name="Blitz" checked={!blitz} onChange={() => setBlitz(false)}/>

            <h3>Spezial</h3>
            <label>Extra Käse</label>
            <input type="checkbox" checked={spezial[0]} onChange={() => handleSpezialChange(0)}/>
            <br/>
            <label>Extra Sauce</label>
            <input type="checkbox" checked={spezial[1]} onChange={() => handleSpezialChange(1)}/>

            <h3>Photo Mode</h3>
            <label>Landscape</label>
            <input type="radio" name="Photo" checked={!portrait} onChange={() => setPortrait(false)}/>
            <br/>
            <label>Portrait</label>
            <input type="radio" name="Photo" checked={portrait} onChange={() => setPortrait(true)}/>

            <h2>GA</h2>
            <label>Gültig ab: </label>
            <input type="date"/>
            <br/>
            <h3>GA Typ</h3>

            <label>{gaTypes[0]}</label>
            <input type="radio" checked={gaTypeBooleans[0]} onChange={() => handleGaTypesChange(0)}/>
            <br/>
            <label>{gaTypes[1]}</label>
            <input type="radio" checked={gaTypeBooleans[1]} onChange={() => handleGaTypesChange(1)}/>
            <br/>
            <label>{gaTypes[2]}</label>
            <input type="radio" checked={gaTypeBooleans[2]} onChange={() => handleGaTypesChange(2)}/>
            <br/>
            <label>{gaTypes[3]}</label>
            <input type="radio" checked={gaTypeBooleans[3]} onChange={() => handleGaTypesChange(3)}/>
            <br/>
            <label>{gaTypes[4]}</label>
            <input type="radio" checked={gaTypeBooleans[4]} onChange={() => handleGaTypesChange(4)}/>
            <br/>
            <label>{gaTypes[5]}</label>
            <input type="radio" checked={gaTypeBooleans[5]} onChange={() => handleGaTypesChange(5)}/>
            <br/>
            <label>{gaTypes[6]}</label>
            <input type="radio" checked={gaTypeBooleans[6]} onChange={() => handleGaTypesChange(6)}/>
            <br/>
            <label>{gaTypes[7]}</label>
            <input type="radio" checked={gaTypeBooleans[7]} onChange={() => handleGaTypesChange(7)}/>
            <br/>
            <label>{gaTypes[8]}</label>
            <input type="radio" checked={gaTypeBooleans[8]} onChange={() => handleGaTypesChange(8)}/>
            <br/>
            <label>{gaTypes[9]}</label>
            <input type="radio" checked={gaTypeBooleans[9]} onChange={() => handleGaTypesChange(9)}/>

            <h3>GA Klasse</h3>

            <label>1. Klasse</label>
            <input type="radio" checked={gaKlasse} onChange={() => handleGaKlasseChange(0)}/>
            <br/>
            <label>2. Klasse</label>
            <input type="radio" checked={!gaKlasse} onChange={() => handleGaKlasseChange(1)}/>

            <h3>Zahlung</h3>
            <label>Monatlich</label>
            <input type="radio" checked={gaZahlung} onChange={() => handleGaZahlungChange(0)}/>
            <br/>
            <label>Jährlich</label>
            <input type="radio" checked={!gaZahlung} onChange={() => handleGaZahlungChange(1)}/>

            <h3>Preis</h3>

            <label>{getGaPreis()}</label>

        </div>
    );
}

export default App;
