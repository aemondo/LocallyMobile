import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components/native';
import MainTabNavigator from './main/navigation/MainTabNavigator';
import theme from './main/theme';

const queryClient = new QueryClient();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <MainTabNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
