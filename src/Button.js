import React from 'react';
import { ThemeConsumer } from './ThemeContext';

const styles = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
    },
};

const Button = ({ children }) => {
    return (
        <ThemeConsumer>
            {value => (
                <div>
                    <button style={styles[value]}>
                        {children} {value}
                    </button>
                </div>
            )}
        </ThemeConsumer>
    );
};

export default Button;