void loop(){
    while(Wifi.status() != WL_CONNECTED){
       Wifi.reconnect();
    }

    if(!client.connected()){
        Serial.println("Node disconnected from MQTT broker. Trying to connect..");
        reconnect();
    }

    client.loop();
    long now = millis();
    if (now - lasTime > 2000){
        lasTime = now;
        uint16_t value = analogRead(A0);
        Serial.println("Publishing message:");
        serial.println(value);
        client.publish("IPB/Iot/Aula02/adilson/TEMP", String(value).c_str());
    }

}
