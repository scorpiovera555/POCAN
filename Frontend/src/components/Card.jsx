import { Minus } from "lucide-react";
import { useEffect } from "react"

function Card({ item, food, setFood }) {
    const cartItem = food.find(data => data.name == item.name);
    let amount = cartItem ? cartItem.amount : 0;

    useEffect(() => {
        localStorage.setItem("food", JSON.stringify(food))
    }, [food])
    
    const addAmount = () => {
        if (amount + 1 > 5) return

        const match = food.find(data => data.name == item.name);
        console.log(match)
        let updated;
        if (match) {
            updated = food.map(data => {
                return data.name == item.name ? {...data, amount: data.amount + 1} : data
            })
            
            setFood(updated)
            return
        }

        const data = {
            name: item.name,
            price: item.prepTimeMinutes,
            amount: amount + 1
        }
        setFood([...food, data])
    }

    const minusAmount = () => {
        if (amount - 1 < 0) return
        const updated = food.map(data => {
            return data.name == item.name ? {...data, amount: data.amount - 1} : data
        })

        const newData = updated.filter(data => data.amount != 0);
        setFood(newData);
    }

    const buttonStyles = "w-5 h-5 rounded-full flex items-center justify-center text-lg"
    return(
        <div className="bg-gradient-to-br from-[#DCFCE7] to-[#F0FDF4] flex flex-col justify-between p-2 rounded-lg w-37 h-47">
            <div className="w-full h-25 rounded-lg bg-gray-200">
                <img src={item.image} alt="gambar makanan" className="rounded-lg w-full h-full" />
                <h1 className="font-semibold text-sm">{item.name}</h1>
            </div>
            <div className="flex justify-between items-end">
                <p>${item.prepTimeMinutes}</p>
                <div className="flex items-center gap-3">
                    <button onClick={minusAmount} className={`${buttonStyles} bg-green-200 text-green-600`}><Minus /></button>
                    <p>{amount}</p>
                    <button className={`${buttonStyles} bg-primary text-white`} onClick={addAmount}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Card