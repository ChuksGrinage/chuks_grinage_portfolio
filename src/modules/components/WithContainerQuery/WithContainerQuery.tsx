
import React from "react";
import { ContainerQuery } from 'react-container-query';
import classnames from 'classnames';


export interface device {
  mobile: boolean;
  // tablet: boolean; 
  desktop: boolean;
}

interface WithContainerQueryProps {
  children: React.ReactNode;
}

const device = {
  mobile: {
    maxWidth: 768
  },
  desktop: {
    minWidth: 769,
  }
};

const WithContainerQuery = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component {
    render() {
      return (
        <ContainerQuery query={device}>
          {(device) => (
            <WrappedComponent {...this.props} />
          )}
        </ContainerQuery>
      )
    }
  }
}

export default WithContainerQuery;
