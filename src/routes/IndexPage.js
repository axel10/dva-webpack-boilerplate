import React from 'react';
import { connect } from 'dva';
import './IndexPage.less';
import ListBody from '../components/ListBody';
import myContext from '@/components/myContext';
import TsTest from '@/components/TsTest';


class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      testState: 1
    };
  }

  add = (num) => () => {
    const { testState } = this.state;
    this.setState({ testState: testState + num });
  };

  render() {
    return (
      <div>
        <ListBody {...this.props} />
        <ul className="li">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>

        <myContext.Provider value={this.state}>
          <ListBody />
        </myContext.Provider>

        <button type="button" onClick={this.add(2)}>add</button>

        <TsTest />
      </div>

    );
  }
}

function mapState(state) {
  return { list: state.listData };
}

export default connect(mapState)(IndexPage);
