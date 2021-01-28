import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile197589Navigator from '../features/UserProfile197589/navigator';
import Maps197570Navigator from '../features/Maps197570/navigator';
import Settings197548Navigator from '../features/Settings197548/navigator';
import Settings197533Navigator from '../features/Settings197533/navigator';
import NotificationList197532Navigator from '../features/NotificationList197532/navigator';
import Maps197531Navigator from '../features/Maps197531/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile197589: { screen: UserProfile197589Navigator },
Maps197570: { screen: Maps197570Navigator },
Settings197548: { screen: Settings197548Navigator },
Settings197533: { screen: Settings197533Navigator },
NotificationList197532: { screen: NotificationList197532Navigator },
Maps197531: { screen: Maps197531Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
