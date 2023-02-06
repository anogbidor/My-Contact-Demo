import React from "react";
import Card from "./Cards";
import contacts from "./Contacts";
import Avatar from "./Avatar";

function contactCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}
function App() {
  return (
    <div>
      <h1>My Top 4 Contacts</h1>
      <Avatar img="https://i.pinimg.com/736x/38/58/54/38585410b60e40bfca4f6ce2b6888efa--morris-chestnut-fine-men.jpg" />

      {contacts.map(contactCard)}
    </div>
  );
}
export default App;

/* <Avatar img="https://i.pinimg.com/736x/38/58/54/38585410b60e40bfca4f6ce2b6888efa--morris-chestnut-fine-men.jpg" />

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />

      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />

      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        tel={contacts[3].phone}
        email={contacts[3].email}
      /> */
