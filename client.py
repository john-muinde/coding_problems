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


port = 5005


def udp_communication(sock):
    try:
        while True and (KeyboardInterrupt):
            data, addr = sock.recvfrom(1024)
            print('Server: ', data.decode())
            sent = sock.sendto(input('Client: ').encode(), addr)
    except (KeyboardInterrupt or SystemExit or socket.error):
        sock.send(('Client: Disconnected ').encode())
        sock.close()
        socket.get


def tcp_communication(sock):
    try:
        sock.connect(('localhost', port))
        while True and (KeyboardInterrupt):
            data = sock.recv(1024).decode()
            print('Server: ', data)
            sent = sock.send(input('Client: ').encode())
    except (KeyboardInterrupt or SystemExit or socket.error or EOFError):
        sock.send(('Client: disconnected ').encode())
        sock.close()


# Creating a socket for both TCP and UDP communication
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
sock.bind(("0.0.0.0", port))

# Prompting the user to choose between TCP and UDP communication
protocol = input("Choose between TCP (t) and UDP (u) communication: ")
if protocol == 'u':
    # Starting the UDP communication
    udp_communication(sock)
elif protocol == 't':
    # Closing the UDP socket and creating a TCP socket
    sock.close()
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Starting the TCP communication
    tcp_communication(sock)
else:
    print("Invalid option selected")
