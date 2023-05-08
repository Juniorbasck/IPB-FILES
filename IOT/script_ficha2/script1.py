void reconnect(){

    while(client.connected()){
        serial.println("Attempting MQTT connection...");

        String clientId = "AulaIoT";
        clientId += String(random(0xffff), HEX);

        if(client.connect(clientId.c_str())){
            serial.println("Connected to MQTT broker");
            client.subscribe("IPB/Iot/Aula02/adilson/LED");
        }else{
            serial.print("Failed, rc=");
            serial.print(client.state());
            serial.println(" try again in 5 seconds");  
            delay(5000);
        }
    }
}