import React from "react";
import './ListBody.scss'

export default class ListBody extends React.Component{

    removeItem(Index){
        console.log(this.props);
        this.props.dispatch({type:'listData/fetchRemoveItem',payload:Index});
    }


    render(){
        const list = this.props.list.list;

        return(
            <div>
                listBody
                <ul className={'ul'}>
                    {list.map((item,index)=>(
                        <li key={index} onClick={this.removeItem.bind(this,index)}>
                            {item.id} and {index}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}