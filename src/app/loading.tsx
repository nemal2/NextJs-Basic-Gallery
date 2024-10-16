import { Spinner } from "react-bootstrap";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <Spinner animation="border" className="d-block mx-auto"/>
}