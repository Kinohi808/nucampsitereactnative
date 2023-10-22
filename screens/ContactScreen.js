import React from "react";
import { ScrollView } from "react-native";
import { Card, Text } from "react-native-elements";

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{margin: 20}}>
                <Card.Title>
                    Contact Information
                </Card.Title>
                <Card.Divider />

                <Text style={{marginBottom: 10}}>
                    1 Nucamp Way {'\n'}
                    Seattle, WA 98001 {'\n'}
                    U.S.A
                </Text>
                <Text style={{marginbottom: 20}}>
                    Phone: 1-206-555-1234 {'\n'}
                    Email: campsites@nucamp.co
                </Text>
            </Card>
        </ScrollView>
    );
};

export default ContactScreen;