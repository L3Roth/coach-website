import React from 'react';
import { Box, Typography } from '@mui/material';
import { useDrop } from 'react-dnd';
import PostItPinAnimation from './PostItPinAnimation';
import { PostIt, PostItData } from './PostItComponent';

interface CircleProps {
    label: string;
    handleDrop: (item: PostItData) => void;
    position: 'left' | 'right';
    placedPostIts: PostItData[];
  }
  
  const CircleComponent: React.FC<CircleProps> = ({ label, handleDrop, position, placedPostIts }) => {
    const [{ canDrop, isOver }, drop] = useDrop({
      accept: 'POSTIT',
      drop: (item: PostItData) => handleDrop(item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    });
  
    return (
      <Box
        ref={drop}
        sx={{
          width: 450,
          height: 450,
          borderRadius: '50%',
          backgroundColor: canDrop ? '#FFD700' : '#ADD8E6',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          [position === 'left' ? 'right' : 'left']: '10%',
          zIndex: 1,
        }}
      >
        <Typography variant="h6">{label}</Typography>
        {isOver && <PostItPinAnimation />}
        {placedPostIts.map((postIt) => (
          <PostIt key={postIt.id} id={postIt.id} text={postIt.text} belongsTo={postIt.belongsTo} />
        ))}
      </Box>
    );
  };
  
  export default CircleComponent;
  