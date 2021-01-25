import React, { useEffect } from 'react';
import './Game.scss';
import TimerIcon from '../hangman/timer.png';
import ReloadIcon from '../hangman/refreshing.png';
import GameList from './GameList';

function Game(props) {
    //display all keys function
    let generateButtons = () => {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
          <button
            className='keys'
            key={letter}
            value={letter}
            onClick={(e)=> props.addKeysHandler(e.target.value)}
            disabled={props.data.guessed.has(letter)}
          >
            {letter}
          </button>
        ));
      };
    //display answer keys function
    let guessedWord = () =>{
        return props.data.answer.split("").map(letter => (props.data.guessed.has(letter) ? letter : " _ "));
    }

    //display TIMER function
    let timer = () => {
        props.timerHandler();

    }

    useEffect( () => {
        if (props.data.timerCount <= 0) {
            return;
        }
        const interval = setInterval(timer,1000);
        return () => clearInterval(interval);
     }, [props.data.timerCount]);

     if(guessedWord().join("") === props.data.answer && props.data.timerCount!==0){
            props.timerHandler(0);
     }

     //display save game function
     let saveGame = () => {
         let data = [];
         if(localStorage.getItem('allGames')){
            data = JSON.parse(localStorage.getItem('allGames'))
         }
         let newData = {
             date:new Date(),
             errors:props.data.mistake,
             finished:(props.data.timerCount===0 || props.data.mistake>=6 || guessedWord().join("") === props.data.answer)?true:false
         }
         data.push(newData);
         localStorage.setItem('allGames', JSON.stringify(data));
         window.location.reload();
         
     }

     //display game list toggle function
     let listView = () => {
         if(props.data.isListView){
            props.viewList();
            window.location.reload();
         } else {
            props.viewList();
         }
     }
    return (
        <div className="gameZone">

            {
                !props.data.isListView ?
                        <div className="game">
                        <div className="topRow">
                            <img src={props.data.images[props.data.mistake]} alt="" className="hangman"/>
                            
                            <div className="timerCount">
                                    <img src={TimerIcon} alt="" />
                                    <span className="count">{props.data.timerCount}</span>
                            </div>
                            <div className="reload">
                                    <img src={ReloadIcon} alt="" onClick={() => window.location.reload()}/>
                                    <span className="text">New Word</span>
                            </div>
                        </div>
                        
                        <div className="keyZone">
                            <div className="guessWord">
                            {
                                (props.data.mistake>=6 || props.data.timerCount===0)
                                ? <h2>{props.data.answer}</h2>
                                :<div>{guessedWord()}</div>
                            } 
                            </div>
                            {(props.data.timerCount===0 || props.data.mistake>=6 || guessedWord().join("") === props.data.answer)
                                ?<h1>{guessedWord().join("") === props.data.answer?<span className="green">You Win</span>:<span className="red">You Loose</span>}</h1>
                                :<div>{generateButtons()}</div>
                            }
                            
                        </div>
                    </div>
                : <GameList/>
            }
            <div className="actionBt">
        {!props.data.isListView && <button onClick={()=> saveGame()}>Save Game</button>} <button onClick={()=> listView()}>{props.data.isListView?'Play Game':'View Played Games'}</button>
            </div>
        </div>
    )
}
export default Game
