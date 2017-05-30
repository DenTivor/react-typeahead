import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

// import {
//   Header,
//   MainSection,
//   model,
//   addTodo,
//   editTodo,
//   clearCompleted,
//   completeAll,
//   completeTodo,
//   deleteTodo
// } from '../../todos';

import {
  SearchBlock,
  model
} from '../../reacttypeahead';

interface AppProps {
  icons: model.IconCard[];
  dispatch: Dispatch<{}>;
  getIcons(value: string):void;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { getIcons } = this.props;
    const { icons, dispatch } = this.props;

    return (
      <div className="central-part">
        <div className="search-block-wrapper">
          <SearchBlock initialFocusedInput={true} getIcons={(text: string) => {getIcons(text)}} />
        </div>
        <div className="notification-text-wrapper">
          Npw
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  icons: state.icons
});

const mapDispatchToProps = dispatch => ({
  getIcons: (value: string) => {
    debugger;
    // dispatch(requestHints(value));

    // fetchHints(value).then((hints: model.ProfileCard[]) => {
    //   dispatch(receiveHints(hints));
    // });
  },
  // selectHint: (value: string) => {
  //   dispatch(selectHint(value));
  // }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
