import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList120900Navigator from '../features/ArticleList120900/navigator';
import ArticleList120899Navigator from '../features/ArticleList120899/navigator';
import SignIn11120898Navigator from '../features/SignIn11120898/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList120900: { screen: ArticleList120900Navigator },
ArticleList120899: { screen: ArticleList120899Navigator },
SignIn11120898: { screen: SignIn11120898Navigator },

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
