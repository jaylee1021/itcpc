import { render } from '@testing-library/react';
import Navbar from './app/navbar';

it('renders without crashing', async () => {
    render(<Navbar />);
});


