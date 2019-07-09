import React from 'react';
import ContentLoader from 'react-content-loader';


const MyLoader = () => {
  return (
    <ContentLoader style={{ marginTop: 50 }} height={200}
      primaryColor={'#32B4B7'}
      secondaryColor={'#0D8B98'} >
      <rect x="0" y="0" rx="6.8" ry="6.8" width="400" height="200" />
    </ContentLoader>
  )
}

export default MyLoader;
