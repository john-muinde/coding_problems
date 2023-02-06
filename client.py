import socket

# # take the server name and port name

# host = 'localhost'
# port = 5000

# # create a socket at client side
# # using TCP / IP protocol
# s = socket.socket(socket.AF_INET,
#                   socket.SOCK_STREAM)

# # connect it to server and port
# # number on local computer.
# s.connect(('127.0.0.1', port))

# # receive message string from
# # server, at a time 1024 B
# msg = s.recv(1024)

# # repeat as long as message
# # string are not empty
# while msg:
#     print('Received: ',msg.decode())
#     msg = s.recv(1024)
# s.send(b'Hi I\'m John')

# # disconnect the client
# s.close()


class KeyboardInterrupt(Exception):
    """Exception raised for errors in the socket connection.

    Attributes:
        message -- explanation of the error
    """

    def __init__(self, message="Keyboard Interrupt or SystemExit"):
        self.message = message
        super().__init__(self.message)

import socket


sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_BROADCAST, 1)
sock.bind(("0.0.0.0", 5005))

try:
    while True:
        data, addr = sock.recvfrom(1024)
        # sock.sendto(bytes("hello", "utf-8"), ip_co)
        print('Server: ',data.decode())
        sock.sendto(input('Client: ').encode(), addr)
except( KeyboardInterrupt or SystemExit):
    raise KeyboardInterrupt()