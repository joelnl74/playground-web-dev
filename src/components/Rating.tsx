import { useState } from "react";
import styles from "./Rating.module.css"

export function Rating()  {
    const [selectedRating, setSelectedRating] = useState<number>();

    function HandleRatingOnClick(value: number)
    {
        setSelectedRating(value);
    }

    return <div className={styles.panel}>
        <img className={styles.star}  src="/logo192.png" width={"25%"} height={"20%"} ></img>
        <h1 className={styles.title}>How yould you rate react?</h1>
        <p className={styles.description}>Rate using react with typescript from 1 to 5</p>
        <div className={styles.group}>
            {[1, 2, 3, 4, 5].map((rating) => (
                <button 
                    onClick={() => HandleRatingOnClick(rating)}
                     className={styles.rating}>
                        {rating}
                </button>

            ))}
        </div>
        
        <button disabled={selectedRating===undefined} className={styles.submit}>Confirm</button>

    </div>
}