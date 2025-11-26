# Section 3 — System Design

Loom Link:

UML Diagram: https://lucid.app/lucidchart/7eee58ab-ed68-4b65-9f82-6f4cc2e2e8b0/edit?beaconFlowId=5B8F3450E741EC80&invitationId=inv_198baeb2-ef8a-4190-a7b4-ac7f52dc1ef9&page=0_0#

## Notes:

Feel free to add any notes or planning here.

We have 3 classes. These 3 classes represent a resteraunt, a customer, and the items that a customer can order from a resteraunt.

Customer needs a way to order, therefor I will be making a seperate class called Order to represent the customers order, this way I can also have a status property to represent how an order can be marked as "pending", "in progress", "picked up", or "delivered".
