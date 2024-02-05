import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input, Button } from "react-native-elements";
import { useState } from "react";
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { authentication } from "../firebase/firebaseconfig";
import { doc,setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

export default function Register() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avater, setAvater] = useState("");

  const registerUser = async () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((userCredentials) => {
        const userUID = userCredentials.user.uid;
        const docRef = doc(db, 'users', userUID);
        const docSnap = setDoc(docRef,{
            avaterUrl: avater ? avater :'https://www.flaticon.com/free-icon/user_552848',
            username,
            password,
            userUID,
            email

        })
      })
      .then(()=>  console.log('succesful'))
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your Username"
        label="username"
        value={username}
        onChangeText={(text) => setusername(text)}
        leftIcon={{ type: "material", name: "account-circle" }}
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        leftIcon={{ type: "material", name: "email" }}
      />

      <Input
        placeholder="Enter your password"
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        leftIcon={{ type: "material", name: "lock" }}
        
      />

      <Input
        placeholder="Avater url"
        label="Avater"
        value={avater}
        onChangeText={(text) => setAvater(text)}
        leftIcon={{ type: "material", name: "link" }}
        secureTextEntry
      />

      <Button onPress={registerUser} style={styles.btn} title="Register" />
    </View>
  );
}

const styles = StyleSheet.create({});
