import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styles from "../../style";
import Button from "../../Components/Button";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const SignUpScreen = (props) => {
  const [nom, setnom] = React.useState("");
  const [prenom, setprenom] = useState("");
  const [dateBirth, setdateBirth] = useState(new Date());
  const [show, setshow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpass] = useState("");
  const [role, setrole] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateBirth;
    setshow(Platform.OS === "ios");
    setdateBirth(currentDate);
    let tempDate = new Date(currentDate);
    let fdate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    console.log(fdate);
  };

  return (
    <ScrollView style={{ ...styles.container }}>
      <View style={styles.loginContainer}>
        <StatusBar style="auto" />
        <Image
          style={{
            ...styles.logoConnexion,
            width: 130,
            height: 130,
            marginBottom: 30,
            marginTop: -20,
          }}
          source={require("../../../assets/logo_onhand-fleur.png")}
        />
        <View style={{ ...styles.loginInputContainer }}>
          <Text style={{ alignSelf: "flex-start", color: "white" }}>
            Votre nom:
          </Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setnom}
            value={nom}
            placeholder="Votre nom:..."
            placeholderTextColor="#ffffff50"
          />
        </View>
        <View style={{ ...styles.loginInputContainer }}>
          <Text style={{ alignSelf: "flex-start", color: "white" }}>
            Votre prenom:
          </Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setprenom}
            value={prenom}
            placeholder="Votre prenom:..."
            placeholderTextColor="#ffffff50"
          />
        </View>
        <View style={{ ...styles.loginInputContainer }}>
          <Text style={{ alignSelf: "flex-start", color: "white" }}>
            Votre date de naissance:
          </Text>
          <Button
            titre={
              dateBirth.getDate() +
              "-" +
              (dateBirth.getMonth() + 1) +
              "-" +
              dateBirth.getFullYear()
            }
            style={{ ...styles.loginInput, paddingVertical: 8 }}
            onPress={() => setshow(true)}
          />

          {show && (
            <RNDateTimePicker
              minimumDate={new Date(1950, 0, 1)}
              maximumDate={new Date(2018, 1, 1)}
              textColor="white"
              display="spinner"
              mode="date"
              value={dateBirth}
              onChange={onChange}
              positiveButton={{ label: "OK", textColor: "green" }}
            />
          )}
        </View>
        <View style={{ ...styles.loginInputContainer }}>
          <Text style={{ alignSelf: "flex-start", color: "white" }}>
            Entrez votre mot de passe:
          </Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setpassword}
            value={password}
            placeholder="Entrez votre mot de passe :..."
            placeholderTextColor="#ffffff50"
          />
        </View>
        <View style={{ ...styles.loginInputContainer }}>
          <Text style={{ alignSelf: "flex-start", color: "white" }}>
            Confirmez votre mot de passe:
          </Text>
          <TextInput
            style={styles.loginInput}
            onChangeText={setconfirmpass}
            value={confirmpass}
            placeholder="Confirmez votre mot de passe :..."
            placeholderTextColor="#ffffff50"
          />
        </View>
        <Button
          titre="S'inscrire"
          style={styles.loginButton}
          textStyle={styles.textWhite}
          onPress={() => props.navigation.navigate("login")}
        />
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <Text style={{ color: "white" }}>Vous avez un compte? </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("login")}
            style={{ flexDirection: "row" }}
          >
            <Text style={{ color: "orange" }}>Cliquez ici </Text>
            <Text style={{ color: "white" }}>pour vous connecter.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
