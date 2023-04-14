import paho.mqtt.client as mqtt
import random
import time

broker_address = "localhost"
client = mqtt.Client("sensor_temperatura_umidade")
client.connect(broker_address)

while True:
    temperatura = round(random.uniform(20, 30), 2)
    umidade = round(random.uniform(50, 70), 2)
    message = "Temperatura: {} C, Umidade: {}%".format(temperatura, umidade)
    client.publish("casa/sensor/temperatura_umidade", message)
    time.sleep(5)
