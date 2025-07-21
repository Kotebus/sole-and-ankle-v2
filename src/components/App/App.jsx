import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
    const [sortId, setSortId] = React.useState('newest');

    return (
        <>
            <GlobalHeader/>
            <Main>
                <ShoeIndex sortId={sortId} setSortId={setSortId}/>
            </Main>
        </>
    );
};

const Main = styled.main`
    padding: 64px 32px;
    height: 100%;
    isolation: isolate;
`;

const GlobalHeader = styled(Header)`
    isolation: isolate;
`;

export default App;
