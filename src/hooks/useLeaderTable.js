import { useState, useEffect } from "react"

export default function useLeaderTable(urlApi) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(urlApi)
            .then(res => res.json())
            .then(item => setData(item))
    }, [urlApi])

    return { data }
}