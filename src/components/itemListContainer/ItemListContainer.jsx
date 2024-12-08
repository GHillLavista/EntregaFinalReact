import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'; 
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  console.log(id)

  useEffect(() => {
    const db = getFirestore();

    const refCollection = !id
      ? collection(db, "items")
      : query(collection(db, "items"), where("category", "==", id));
    
    console.log(refCollection);

    getDocs(refCollection)
      .then((snapshot) => {
        console.log(snapshot);
        if (snapshot.empty) {
          console.log("No hay productos en esta categoría.");
        }
        setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return <>{loading ? <h5>Loading...</h5> : <ItemList products={items} />}</>;
};

export default ItemListContainer;


