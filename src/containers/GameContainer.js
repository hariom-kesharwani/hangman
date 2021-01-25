import Game from '../components/Game';
import {connect} from 'react-redux';
import {addKeys} from '../services/actions/actions';

const mapStateToProps=state=>{
    return {
        data : state.insertKeys
    }
}
const mapDispatchToProps=dispatch=>({
    addKeysHandler:data=>dispatch(addKeys(data)),
    timerHandler:data=>dispatch({type:'Timer',data:data}),
    viewList:data=>dispatch({type:'List_View'})

})
export default connect(mapStateToProps,mapDispatchToProps)(Game)