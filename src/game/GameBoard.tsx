import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { DndProvider, useDrop } from 'react-dnd';
import { PostIt, PostItData } from './PostItComponent';
import { ItemTypes } from './ItemTypes';
import CircleComponent from './CircleComponent'; // Using CircleComponent for ADHD and Autism
import PostItPinAnimation from './PostItPinAnimation';
import { HTML5Backend } from 'react-dnd-html5-backend';

const initialPostIts: PostItData[] = [
  { id: 1, text: 'Hyperaktivität', belongsTo: 'ADHD' },
  { id: 2, text: 'Kommunikationsprobleme', belongsTo: 'Autism' },
  { id: 3, text: 'Impulsivität', belongsTo: 'ADHD' },
  { id: 4, text: 'Fixierte Interessen', belongsTo: 'Autism' },
];

const GameBoard: React.FC = () => {
  const [placedPostIts, setPlacedPostIts] = useState<PostItData[]>([]);

  const handleDrop = (item: PostItData, target: string) => {
    console.log("Dropped item:", item);
    if (item.belongsTo === target && !placedPostIts.some(postIt => postIt.id === item.id)) {
        setPlacedPostIts((prev) => [...prev, item]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '600px',
          p: 2,
          position: 'relative',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', mb: 12 }}>
          <CircleComponent
            label="ADHD"
            handleDrop={(item: PostItData) => handleDrop(item, 'ADHD')}
            position="left"
            placedPostIts={placedPostIts.filter((postIt) => postIt.belongsTo === 'ADHD')}
          />
          <CircleComponent
            label="Autism"
            handleDrop={(item: PostItData) => handleDrop(item, 'Autism')}
            position="right"
            placedPostIts={placedPostIts.filter((postIt) => postIt.belongsTo === 'Autism')}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%',
            backgroundColor: '#f0f0f0',
            padding: '16px',
            borderRadius: '8px',
            mt: 50,
          }}
        >
          {initialPostIts
            .filter((postIt) => !placedPostIts.some((p) => p.id === postIt.id))
            .map((postIt) => (
              <PostIt key={postIt.id} id={postIt.id} text={postIt.text} belongsTo={postIt.belongsTo} />
            ))}
        </Box>
      </Box>
    </DndProvider>
  );
};

export default GameBoard;
