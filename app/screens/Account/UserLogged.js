import React from "react";
import { View, Text, Button } from "react-native";
import * as firebase from "firebase";

export default function UserLogged() {
    return (
        <View>
            <Text>UserLogged...</Text>
            <Button title="Logout" onPress={() => firebase.auth().signOut()} />
        </View>
    );
}