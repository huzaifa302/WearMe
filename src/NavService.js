import {
    CommonActions,
    StackActions,
    DrawerActions,
  } from '@react-navigation/native';
  
  let _navigator;
  
  function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
  }
  
  function navigate(name, params = {}) {
    _navigator.dispatch(
      CommonActions.navigate({
        name,
        params,
      }),
    );
  }
  function push(name, params = {}) {
    _navigator.dispatch(StackActions.push(name, params));
  }
  function goBack() {
    _navigator.dispatch(CommonActions.goBack());
  }
  function toggleDrawer() {
    _navigator.dispatch(DrawerActions.toggleDrawer());
  }
  function replace(routeName, params = {}) {
    _navigator.dispatch(
      StackActions.replace({
        routeName,
        params,
      }),
    );
  }
  function reset(index, routes) {
    _navigator.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
  
  export {
    navigate,
    push,
    goBack,
    replace,
    reset,
    setTopLevelNavigator,
    toggleDrawer,
  };