// Add consistent error handling
export const handleError = (error, setError) => {
  console.error('Error:', error);
  setError(error.message || 'An unexpected error occurred');
};

export const withErrorBoundary = (WrappedComponent) => {
  return class ErrorBoundary extends React.Component {
    state = { hasError: false, error: null };

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    render() {
      if (this.state.hasError) {
        return <ErrorDisplay error={this.state.error} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
}; 