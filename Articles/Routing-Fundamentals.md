# Understanding Packet Forwarding: Routing Fundamentals

When a router receives an IP packet, it consults its **Routing Table** to find the best route to forward the packet. 

## Key Concepts

### 1. Connected & Local Routes
* **Connected Route (C):** Automatically added when an interface is configured. Tells the router how to reach directly connected devices (e.g., `192.168.1.0/24`).
* **Local Route (L):** Represents the router's own IP address assigned to an interface (with a `/32` prefix, e.g., `192.168.1.1/32`).

### 2. Matching Logic & The Longest Prefix Rule
If a router finds multiple routes matching a destination address, it ALWAYS selects the route with the **Longest Prefix Length** (most specific match).

```
Target IP: 192.168.1.60
Match 1: 192.168.0.0/16
Match 2: 192.168.1.0/24  <-- WINNER (More specific)
```
### Note: If no route matches the destination address, the router will DROP the packet immediately (unlike switches which flood unknown frames).
