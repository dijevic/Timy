import React from "react";
import { AppRouter } from "./routes/AppRouter";
import { ErrorBoundary } from "react-error-boundary";
import FallbackErrorComponent from "./components/errorBound/ErrorBoundary";

export const Timy = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackErrorComponent}>
      <AppRouter />
    </ErrorBoundary>
  );
};
