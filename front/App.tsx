// import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Pressable, Alert, TextInput } from 'react-native';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { rootStore, StoreProvider } from "./app/store/index";
import AuthForm from './app/pages/authorization/Authorization';
import DataInputForm from './app/pages/anketaPage/DataInputForm';
import TeamPage from './app/pages/teamPage/TeamPage';

export default function App() {
  const handleButtonPress = () => Alert.alert("Hello", 'message', [
    { text: "Yes", onPress: () => console.log('test') },
    { text: "no" }
  ])

  const handleButtonPressPrompt = () => Alert.prompt('test', 'test', text => console.log(text))
  return (
    <StoreProvider value={rootStore}>
      <SafeAreaView >

        <Router>
          <Routes>
            <Route path="/login" element={<AuthForm />} />
            <Route path="/list" element={<DataInputForm />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
        </Router>
      </SafeAreaView>
    </StoreProvider>
  );
}


