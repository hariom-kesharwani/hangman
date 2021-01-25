import { Guessed_Keys } from '../constants';
import {randomWord} from '../constants';
import step0 from "../../hangman/0.jpg";
import step1 from "../../hangman/1.jpg";
import step2 from "../../hangman/2.jpg";
import step3 from "../../hangman/3.jpg";
import step4 from "../../hangman/4.jpg";
import step5 from "../../hangman/5.jpg";
import step6 from "../../hangman/6.jpg";

const initialState = {
    guessed: new Set([]),
    mistake: 0,
    answer: randomWord(),
    images: [step0, step1, step2, step3, step4, step5, step6],
    timerCount:20,
    isListView:false
}
export default function insertKeys(state = initialState, action) {
    switch (action.type) {
        case Guessed_Keys:
            return {
                ...state,
                guessed:state.guessed.add(action.guessed),
                mistake: state.mistake + (state.answer.includes(action.guessed) ? 0 : 1),
                timerCount:20
        }
        case 'Timer':
            let newTimerCount = state.timerCount-1;
            if(action.data){
                newTimerCount = action.data
            }
            return {
                ...state,
                timerCount:(state.timerCount-1<0 || state.mistake>=6)?0:newTimerCount
        }

        case 'List_View':
            return {
                ...state,
                isListView:!state.isListView
        }

        default:
            return state
    }


}