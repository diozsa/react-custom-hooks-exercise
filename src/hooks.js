import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

function useFlip(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState);

    const flip = () => {
        setFlipped(isUp => !isUp);
    }
    return [isFlipped, flip];
}


function useAxios(url) {
    const [responses, setResponses] = useState([]);
    const addResp = async () => {
        const resp = await axios.get(url);
        setResponses(data => [...data, { ...resp.data, id: uuid() }]);
    }
    return [responses, addResp];
}


export { useFlip, useAxios };