import paho.mqtt.client as mqtt
import time

global LED = 0 

def on_connect(client, userdata, flags, rc):
    client.subscribe("iinternetDasCoisas/test/*")


def callback(client, userdata, msg):
    print(str(msg.topic) + " --- " + str(msg.payload))


client = mqtt.Client()
client.on_connect = on_connect
client.on_message = callback
client.connect('192.1.192.112', 1883, 60)
client.loop_forever()
    