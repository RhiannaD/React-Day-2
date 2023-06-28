import React, {useState} from "react"




    const Component = () => {
    const [game, setGame] = useState({
        id: 1,
        player: {
            name: "Dylan",
        }}
      ) 
      const handleClick = () => {
      setGame({...game, player:{name:'Bob Odenkirk'}})
      console.log(game)
    }

 

    return (
        <div onClick={handleClick}> Name: {game.player.name}</div>
    )
}

export default Component