import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/styled/theme";
import TaskList from "./src/pages/TaskList";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          hidden={true}
          backgroundColor={theme.colors.primary}
          style="light"
          translucent={false}
        />
        <TaskList />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
