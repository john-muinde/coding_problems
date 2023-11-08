//Following example shows how to find local IP Address & Hostname of the system using getLocalAddress() method of InetAddress class.
import java.net.InetAddress;

public class LocalIP {
   public static void main(String[] args)
   throws Exception {
      InetAddress addr = InetAddress.getLocalHost();
      System.out.println("Local HostAddress: "+addr.getHostAddress());
      String hostname = addr.getHostName();
      System.out.println("Local host name: "+hostname +);
   }
}