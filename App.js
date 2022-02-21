/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import type { Node } from "react"
import React from "react"
import { StatusBar, StyleSheet, useColorScheme } from "react-native"
import RootContainer from "./RootContainer"

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "dark"
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <RootContainer />
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400"
  },
  highlight: {
    fontWeight: "700"
  }
})

export default App
