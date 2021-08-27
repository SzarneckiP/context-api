import React, { useContext } from 'react';
import { ThemeConsumer, ThemeContext } from './ThemeContext';

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
    const context = useContext(ThemeContext);

    return (
        <div>
            <ThemeConsumer>
                {value => (
                    <div>
                        <button style={styles[value]}>
                            {children} {value}
                        </button>
                    </div>
                )}
            </ThemeConsumer>
            <div>
                <button style={styles[context]}>
                    useContext:  {children} {context}
                </button>
            </div>
        </div>
    );
};

export default Button;