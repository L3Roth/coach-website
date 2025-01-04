import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

export interface PostItData {
  id: number;
  text: string;
  belongsTo: string;
}

export const PostIt: React.FC<PostItData> = ({ id, text, belongsTo }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.POSTIT,
    item: { id, text, belongsTo },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Box
      ref={drag}
      sx={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        mb: 2,
        mx: 1,
      }}
    >
      <Paper
        sx={{
          padding: '8px 16px',
          backgroundColor: '#ffeb3b',
          display: 'inline-block',
          boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Box>
  );
};
