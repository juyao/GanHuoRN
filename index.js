import { AppRegistry } from 'react-native';
import App from './App';
import GanHuoDetail from "./GanHuoDetail";
import { StackNavigator } from 'react-navigation';
const SimpleApp = StackNavigator({
    Home:{screen:App},
    Detail:{screen:GanHuoDetail},
})
AppRegistry.registerComponent('GanHuoRN', () => SimpleApp);
