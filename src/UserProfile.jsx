import { useState } from "react";

function UserProfile({name, description}) {

    const [likes, setLikes] = useState(0);

    function handleLike() {
        setLikes(likes + 1);
        console.log("Profil został polubiony");
    }

    return (
        <div className="user-profile">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Polubienia: {likes}</p>
            <button onClick={handleLike}>
                Polub
            </button>
        </div>
    )
}

export default UserProfile