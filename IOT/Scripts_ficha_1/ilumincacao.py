import paho.mqtt.client as mqtt

broker_address = "localhost"
client = mqtt.Client("iluminacao")

def on_message(client, userdata, message):
    if message.payload.decode() == "ligar":
        print("Ligando iluminação...")
    elif message.payload.decode() == "desligar":
        print("Desligando iluminação...")

client.connect(broker_address)
client.subscribe("casa/iluminacao")
client.on_message = on_message

client.loop_forever()   