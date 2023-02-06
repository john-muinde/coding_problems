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
from time import sleep
from getmac import getmac

# import subprocess


# def get_mac_address(ip_address):
#     arp_command = ['arp', '-n', ip_address]
#     output = subprocess.check_output(arp_command).decode()
#     # mac_address = output.split()[3]
#     return mac_address
class KeyboardInterrupt(Exception):
    """Exception raised for errors in the socket connection.

    Attributes:
        message -- explanation of the error
    """

    def __init__(self, message="Keyboard Interrupt or SystemExit"):
        self.message = message
        super().__init__(self.message)


def main():
    interfaces = socket.getaddrinfo(
        host=socket.gethostname(), port=None, family=socket.AF_INET)
    allips = [ip[-1][0] for ip in interfaces]
    getmac.PORT = 5005  # Default is 55555

    msg = f'hello world {socket.gethostname()}'.encode()
    # print(interfaces)
    try:
        while True:
            ip = allips[0]
            mac = getmac.get_mac_address(
                ip=f'{ip}', network_request=True)
            sock = socket.socket(
                socket.AF_INET, socket.SOCK_DGRAM, socket.IPPROTO_UDP)  # UDP
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
            sock.bind((ip, 0))
            sock.sendto(
                input(f'ip: {ip} mac: {mac}: ').encode(), ("255.255.255.255", 5005))
            data, addr = sock.recvfrom(1024)
            print('Client: ',data.decode())
            sock.close()
            sleep(2)
    except (KeyboardInterrupt or SystemExit):
        raise KeyboardInterrupt()


main()
