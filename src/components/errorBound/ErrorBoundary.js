import React from 'react'

const FallbackErrorComponent = ({error ,resetErrorBoundary}) => {
  return (
    <div role="alert">
    <p>An error occurred:</p>
    <pre>{error.message}</pre>
    <button onClick={resetErrorBoundary}>Try again</button>
  </div>
  )
}

export default FallbackErrorComponent
