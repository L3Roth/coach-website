import React from 'react';
import { Box } from '@mui/material';

const PostItPinAnimation: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        animation: 'pin 0.3s ease-in-out',
        '@keyframes pin': {
          '0%': { transform: 'translate(-50%, -50%) scale(0)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)' },
        },
      }}
    />
  );
};

export default PostItPinAnimation;
