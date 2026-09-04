import { useEffect, useState } from "react";

function Cart() {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("food")) || []);
    useEffect(() => {
        localStorage.setItem("food", JSON.stringify(items))
    }, [items])
    console.log(items)
    if (items.length == 0) return <h1>Gak Ada barang bro</h1>
    return (
        <>
        {items.map(item => {
            return <div>
                <h1>{item.name}</h1>
                <p>Jumlah : {item.amount}</p>
                <p>Harga : ${item.price}</p>
                <p>Total : ${item.price * item.amount}</p>
                <button onClick={(e) => {
                    const name = e.target.parentElement.firstElementChild.textContent;
                    const newItem = items.filter(data => data.name != name);
                    setItems(newItem)
                }}>Hapus</button>
            </div>
        })}
        </>
    )
}

export default Cart;