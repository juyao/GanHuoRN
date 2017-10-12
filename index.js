import {AppRegistry} from 'react-native';
import GanHuoDetail from "./GanHuoDetail";
import {StackNavigator} from 'react-navigation';
import ScroillTab from "./TabScoller";

const SimpleApp = StackNavigator({
    Home:{screen:ScroillTab},
    Detail:{screen:GanHuoDetail},
})
AppRegistry.registerComponent('GanHuoRN', () => SimpleApp);
