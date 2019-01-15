import React from 'react';
import styles from './ListBody.less';
import { connect } from 'dva';
import myContext from '@/components/myContext';


class ListBody extends React.Component {

  removeItem(id) {
    const {dispatch} = this.props
    dispatch({ type: 'listData/fetchRemoveItem', payload: id });
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        <h3 className={styles.title}>
          listBody
          context
        </h3>

        <myContext.Consumer>
          {
            ({ testState }) => (
              <div>
                {testState}
              </div>
            )
          }
        </myContext.Consumer>
        <img src={require('../assets/awesome_webpack_branding.png')} alt="" style={{ width: 300 }} />
        <ul>
          {list.map((item, index) => (
            <li key={item.id} onClick={this.removeItem.bind(this, item.id)}>
              {item.id} and {index}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => state.listData)(ListBody);
