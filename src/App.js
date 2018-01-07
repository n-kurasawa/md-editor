import React from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { load, addTestDate } from './reducers/article';

const styles = {
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
};

class App extends React.Component {
  componentDidMount() {
    // this.props.addTestDate();
    this.props.load();
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div style={styles.appFrame}>
          <SideBar />
          <Editor />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { load, addTestDate })(App);
