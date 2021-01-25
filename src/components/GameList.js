import React from 'react';
import './Game.scss';
import moment from 'moment';

function GameList(props) {
    let tableData = () => {
        let allData = [];
        if(localStorage.getItem('allGames')){
            allData = JSON.parse(localStorage.getItem('allGames'))
         }
        return <div>{
                        allData && allData.length>0 && 
                        <div>
                            <table className="list">
                            <tr>
                                <th style={{width:'20%'}}>Date</th>
                                <th style={{width:'20%'}}>Errors</th>
                                <th style={{width:'20%'}}>Finished</th>
                                <th style={{width:'20%'}}>Actions</th>
                            </tr>
                            {allData.map((item,i)=> 
                                    <tr key={i}>
                                        <td style={{width:'20%'}}>{moment(item.date).format('MM/DD/YYYY')}</td>
                                        <td style={{width:'20%'}}>{item.errors}</td>
                                        <td style={{width:'20%'}}><input type="checkbox" defaultChecked={item.finished}/></td>
                                        <td style={{width:'20%'}}></td>
                                    </tr>
                            )}
                            </table>
                        </div>
                    }
                </div>
    }
    return (

                    tableData()
    )
}
export default GameList