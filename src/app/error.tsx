"use client"
import { Button } from "react-bootstrap";

interface ErrorProps {
    error: Error
    reset: () => void
}

export default function Error({error, reset}: ErrorProps) {
    return (
        <div>
            <h1>Something went wrong</h1>
            <Button onClick={reset}>Try again</Button>
        </div>
    );
}