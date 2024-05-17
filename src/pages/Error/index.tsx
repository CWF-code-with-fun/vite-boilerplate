import './index.scss';

type ErrorProps = {
    error: Error;
    resetErrorBoundary: () => void;
  };

export const Error = ({error, resetErrorBoundary}: ErrorProps) => {
    console.log("error", error);

    return (
        <div className="error">
        <h1>Something went wrong</h1>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
    </div>
    )
} 