import paho.mqtt.client as mqtt

broker_address = "localhost"
client = mqtt.Client("aplicacao")

def on_connect(client, userdata, flags, rc):
    print("Connected with result code " + str(rc))

def ligar_iluminacao():
    client.publish("casa/iluminacao", "ligar")

def desligar_iluminacao():
    client.publish("casa/iluminacao", "desligar")

client.connect(broker_address)
client.on_connect = on_connect

while True:
    opcao = input("Digite 1 para ligar a iluminação, 2 para desligar ou 3 para sair: ")
    if opcao == "1":
        ligar_iluminacao()
    elif opcao == "2":
        desligar_iluminacao()
    elif opcao == "3":
        break
    else:
        print("Opção inválida. Digite novamente.")