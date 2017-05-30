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
  icons: model.Icon[];
  dispatch: Dispatch<{}>;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { icons, dispatch } = this.props;

    return (
      <div className="central-part">
        <div className="search-block-wrapper">
          <SearchBlock initialFocusedInput={true} />
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

export default connect(mapStateToProps)(App);
