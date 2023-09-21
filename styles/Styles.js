import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'flex-start',
      alignItems: 'center',

    },
    head: {
      flexDirection: "row",
      gap: 20,
      justifyContent: "center",
      alignContent: 'center',
      alignItems: 'center',
      paddingVertical: 80,
      
      
    },
    heads: {
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      
    },
    number: {
      fontSize: 200,
      fontWeight: '900'
    },
    main: {
      flex: 0,
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: 100
      
    },
    btnmain: {
      flexDirection: "row",
      gap: 20,
      flex: 0,
      justifyContent: 'space-evenly',

    
    },
    btn: {
      width: 190,
      paddingVertical: 80
    },
  });
  