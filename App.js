import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { styles } from './styles/Styles.js';


const Main = () => {
  const [main, setmain] = useState(false);
  const [flight, setflight] = useState(false);
  const [counter, setcounter] = useState(false);
  const [back, setBack] = useState(false);

  const tomain = () => {
    main ? setmain(false) : setmain(true);
    flight ? setflight(false) : setflight(false);
    counter ? setcounter(false) : setcounter(false);
    back ? setBack(false) : setBack(false);
  };
  const toflight = () => {
    flight ? setflight(false) : setflight(true);
    counter ? setcounter(false) : setcounter(false);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };
  const tocounter = () => {
    flight ? setflight(false) : setflight(false);
    counter ? setcounter(false) : setcounter(true);
    main ? setmain(false) : setmain(true);
    back ? setBack(false) : setBack(true);
  };

  return (
    <View style={styles.heads}>
      <View style={styles.head}>
        <Button title="F-LIGHT" disabled={main} onPress={toflight} />
        <Button title="COUNTER" disabled={main} onPress={tocounter} />
      </View>
      <View style={styles.body}>
        {flight && <Flight />}

        {counter && <Counter />}
      </View>
      <View style={styles.btn}>
        {back && <Button title="BACK" onPress={tomain} />}
      </View>
    </View>
  );
};

const Flight = () => {
  const [image, setimage] = useState(false);
  const [text, setText] = useState("OFF");
  const [color, setColor] = useState('#C4D7B2');
  const toImage = () => {
    image ? setimage(false) : setimage(true);
    if (text === 'ON') {
      setText('OFF');
      setColor('#C4D7B2');
    } else {
      setText('ON');
      setColor('#16FF00');
      
    }
  };

  return (
    <View style={{gap: 40}}>

              {image &&  <Image
              source={require("./assets/on.png")}
              style={{ width: 190, height: 400, resizeMode: "cover" , marginVertical: 20}}
            />
            }
          {!image &&  <Image
              source={require("./assets/off.png")}
              style={{ width: 190, height: 400, resizeMode: "cover" ,  marginVertical: 20}}
            />
            }

      <View styles={{width: 10}}>
          <Button color= {color} title= {text} onPress={toImage} />
      </View>
          
    </View>
  );
};
const Counter = () => {
  const [number, setNumber] = useState(0);

  return (

    
    <View style={styles.main}>
    
      <Text style={styles.number}>{number}</Text>
      <View style={styles.btnmain}>
        <Button
          title="-1"
          color={'#16FF00'}
          onPress={() => {
            setNumber(number - 1);
          }}
        />
        <Button
          title="+1"
          color={'#16FF00'}
          onPress={() => {
            setNumber(number + 1);
          }}
        />
      </View>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}

