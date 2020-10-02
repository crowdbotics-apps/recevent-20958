import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn11120972Navigator from '../features/SignIn11120972/navigator';
import Settings120956Navigator from '../features/Settings120956/navigator';
import ArticleList120920Navigator from '../features/ArticleList120920/navigator';
import ArticleList120919Navigator from '../features/ArticleList120919/navigator';
import ArticleList120918Navigator from '../features/ArticleList120918/navigator';
import ArticleList120901Navigator from '../features/ArticleList120901/navigator';
import ArticleList120900Navigator from '../features/ArticleList120900/navigator';
import ArticleList120899Navigator from '../features/ArticleList120899/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn11120972: { screen: SignIn11120972Navigator },
Settings120956: { screen: Settings120956Navigator },
ArticleList120920: { screen: ArticleList120920Navigator },
ArticleList120919: { screen: ArticleList120919Navigator },
ArticleList120918: { screen: ArticleList120918Navigator },
ArticleList120901: { screen: ArticleList120901Navigator },
ArticleList120900: { screen: ArticleList120900Navigator },
ArticleList120899: { screen: ArticleList120899Navigator },

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
