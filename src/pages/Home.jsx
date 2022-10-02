import { DriveFileRenameOutline } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, {useState } from "react";
import HeroBanner from "../components/HeroBanner";


const Home = () => {
    const [excercises, setExcercises] = useState([])
    const [bodyPart, setBodyPart] = useState("all")

    return (
        <Box>
            <HeroBanner />
            <SearchExcercises setExcercises={setExcercises}  bodyPart={bodyPart}  
            setBodyPart={setBodyPart}
            />
            <Exercises  setExcercises={setExcercises} excercises={excercises} bodyPart={bodyPart} />
        </Box> 
    )
}

export default Home