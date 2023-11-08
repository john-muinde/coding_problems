import socket


# # take the server name and port name

# host = 'localhost'

# port = 5000


# # create a socket at server side

# # using TCP / IP protocol

# s = socket.socket(socket.AF_INET,

#                   socket.SOCK_STREAM)


# # bind the socket with server

# # and port number

# s.bind(('', port))


# # allow maximum 1 connection to

# # the socket

# s.listen(2)


# # wait till a client accept
# # connection
# c, addr = s.accept()


# # display client address

# print("CONNECTION FROM:", str(addr))


# # send message to the client after

# # encoding into binary string


# c.send(b"HELLO, How are you ? \

#         Welcome to Akash hacking World")

# msg = "Bye.............."

# c.send(msg.encode())

# trials = 0


# while trials < 10:

#     msg = c.recv(1024)

#     c.send(msg.decode())

#     trials+=1

# # disconnect the server
# c.close()

import socket

import threading
import time
import sys

from getmac import getmac


port = 5005


def jls_extract_def():
    for ip in allips:
        mac = getmac.get_mac_address(
            ip=f'{ip}', network_request=True)
        sock = socket.socket(
            socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)  # UDP
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
        sock.bind((ip, 0))
        sock.sendto(
            (f'ip: {ip} mac: {mac}:  host disconnected').encode(), ("255.255.255.255", port))
        raise KeyboardInterrupt()
        sock.close()
    return None


def udp_threading(allips):
    port = 5005
    getmac.PORT = port  # Default is 55555

    while True:
        try:
            ip = allips[0]
            mac = getmac.get_mac_address(
                ip=f'{ip}', network_request=True)
            sock = socket.socket(
                socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)  # UDP
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
            sock.bind((ip, 0))

            msg = f'ip: {ip} mac: {mac}: {input("Server: ")}'.encode()
            sock.sendto(msg, ("255.255.255.255", port))
            data, addr = sock.recvfrom(1024)
            print('Client: ', data.decode())
            time.sleep(2)
        except KeyboardInterrupt or SystemExit:
            jls_extract_def()
            break


def tcp_threading(allips):

    host = "localhost"
    port = 5005
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((host, port))

    s.listen(2)

    print(f'Server listening on {host}:{port}')

    while True:
        try:
            c, addr = s.accept()
            # print(f'Client {addr} connected')
            c.send(f'{addr} joined current users {allips}'.encode())
            while True:
                data = c.recv(1024).decode()
                if not data:
                    break
                print('Client: ', data)
                try:
                    c.send(input('Server: ').encode())
                except EOFError:
                    s.close()
                    exit()

            c.close()
            s.close()

        except:
            print('Exceptions!!!!!!!!!!!!!!!!!!!!!!')
            s.close()
            sys.exit()


def main():

    interfaces = socket.getaddrinfo(

        host=socket.gethostname(), port=None, family=socket.AF_INET)

    allips = [ip[-1][0] for ip in interfaces]

    udp_thread = threading.Thread(target=udp_threading, args=(allips,))

    tcp_thread = threading.Thread(target=tcp_threading, args=(allips,))

    udp_thread.start()

    tcp_thread.start()


main()
