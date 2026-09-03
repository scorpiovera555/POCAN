import { Minus } from "lucide-react";
import { useState } from "react"

function Card({ item }) {
    const [amount, setAmount] = useState(0);
    
    const addAmount = () => {
        if (amount + 1 > 5) return
        setAmount(amount + 1)
    }

    const minusAmount = () => {
        if (amount - 1 < 0) return
        setAmount(amount - 1)
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