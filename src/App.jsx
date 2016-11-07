import React, {Component} from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Listings from './components/listings';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme = {getMuiTheme(darkBaseTheme)}>
        <Listings />
        </MuiThemeProvider>
      </div>
    );
  }
}
export default App;
