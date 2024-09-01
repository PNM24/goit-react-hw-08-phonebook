import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualizează starea pentru a afișa UI de rezervă
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Poți loga eroarea la un serviciu de logging
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Poți să returnezi orice UI de rezervă
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;