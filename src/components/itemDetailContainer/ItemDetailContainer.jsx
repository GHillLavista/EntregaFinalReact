import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, doc, getDoc, } from "firebase/firestore";
import { ItemCount } from "../itemCount"; 
import { ItemContexts } from "../../contexts/ItemContexts"; 
// import {Swal} from "sweetalert2";



const ItemDetailContainer = () => {
  const { addItem } = useContext(ItemContexts);

  const [items, setItems] = useState(null);

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const value = useContext(ItemContexts);

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "items", id);

    console.log("Buscando ítem con ID:", id);

    getDoc(refDoc)
      .then((snapshot) => {
        console.log("Snapshot:", snapshot.exists());
        if (snapshot.exists()) {
          setItems({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.error("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error getting document:", error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (count) => {
    alert("Guardado en el carrito!");
    addItem({ ...items, quantity: count });
  };

  if (loading) {
    return <h5>Loading...</h5>;
  }

  if (!items) {
    return <h5>Item not found</h5>;
  }

  return (
    <Container className="mt-4">
      <img src={items.image} style={{ width: "24rem", marginBottom: "1rem" }} />
      <h3>
        {items.name}
        {value.items.length}
      </h3>
      <p>{items.category}</p>
      <p>{items.stock}</p>
      <p>{items.description}</p>
      <p>{items.price}</p>
      <ItemCount stock={items.stock} onAdd={onAdd} />
    </Container>
  );
};

export default ItemDetailContainer;

