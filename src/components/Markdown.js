import React from 'react'
import Markdown from 'markdown-to-jsx'

import Typography from '@material-ui/core/Typography'

export default function Default(props) {
    const options = {
        overrides: {
            h3: {
                component: Typography, 
                props: { 
                    variant: "h3"
                }
            },
            h4: {
                component: Typography, 
                props: { 
                    variant: "h4"
                }
            },
            h5: {
                component: Typography, 
                props: { 
                    variant: "h5"
                }
            },
            h6: {
                component: Typography, 
                props: { 
                    variant: "h6"
                }
            },
            p: { 
                component: Typography, 
                props: { 
                    variant: "body1"
                }
            }
        }
    }

    return (
        <Markdown {...props} options={options} />
    )
}