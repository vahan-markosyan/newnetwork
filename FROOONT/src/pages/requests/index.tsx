import { useEffect, useState } from "react"
import { IRequest } from "../../helpers/types"
import { handleRequests } from "../../helpers/api"
import { useParams } from "react-router-dom"

export const Requests = () => {
    const [requests, setRequests] = useState<IRequest[]>([])
    const {id} = useParams()

    useEffect(() => {
        if(id) {
        handleRequests(Number(id))
        .then(response => {
            setRequests(response.payload)
        })
        }
    }, [id])


    return<>
    <h3>Requests</h3>
            {requests.length > 0 ? (
                requests.map(request => (
                    <div key={request.id} className="request-item">
                        <strong>{request.name} {request.surname}</strong>
                    </div>
                ))
            ) : (
                <p>No follow requests now.</p>
            )}

    </>
}