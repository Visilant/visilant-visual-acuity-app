import React from 'react'
import { ErrorFallbackScreen } from './ErrorFallbackScreen'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

// eslint-disable-next-line react/display-name
export const withErrorBoundary = <T,>(CustomComponent: React.ComponentType<T>) => {
  const WrappedComponent = (props: T) => (
    <ErrorBoundary>
      <CustomComponent {...(props as T & React.JSX.IntrinsicAttributes)} />
    </ErrorBoundary>
  )
  return WrappedComponent
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  resetError = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallbackScreen resetError={this.resetError} />
    }
    return this.props.children
  }
}
