import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Avatar, Divider, Grid } from '@mui/material';
import Profilbild from '../images/Profilbild.jpg';

const AboutMe: React.FC = () => {
  const [aboutMe, setAboutMe] = useState<string>('');
  useEffect(() => {
    // Den Text einmal nach dem ersten Render setzen
    setAboutMe(`
      Hey 
Ich bin Pia, geboren und aufgewachsen in der Nordheide, tief verwurzelt mit ihrer wunderschönen Natur, Food Enthusiast, narcissistic abuse survivor, Aszendent Coach und Denglisch ist meine Zweitsprache.
Ich habe nach meinem Abitur Schwerpunkt Pädagogik/ Psychologie eine Ausbildung zur Medizinischen Fachangestellten im Universitätsklinikum Hamburg-Eppendorf gemacht und schnell gemerkt, dass ich meine Empathie und den Wunsch Menschen tiefgreifend zu helfen nur bedingt nutzen konnte (meistens zeitlich bedingt). 
Dieses Talent hat sich schon früh geäußert, während ich den Partnerinnen meines narzisstischen Erzeugers in fast schon therapeutischen Ausmaßen half. Ich entwickelte ein Gefühl für die wahre Wahrheit. Die, die man nicht zeigen möchte oder kann, die sich für mich aber ganz deutlich in den Augen widerspiegelt. 
Nach dem japanischen Lebensprinzip Ikigai, kündigte ich also im UKE und fand meine Bestimmung, Passion und Mission im Coachen. Menschen zu ihrem wahren Potential zu helfen, mit Ihnen den Weg zum Funken, zur Inspiration zu suchen, auszuleuchten und zu Pflastern, ist einer meiner Lieblingsparts des Coachens. Ebenso, Erkenntnis und Verstehen in den Augen aufleuchten zu sehen, wenn ein Gedankenmuster aufgedeckt und vielleicht sogar aufgelöst werden kann. Es ist wunderbar einen Menschen langsam wieder leben zu sehen, wenn er endlich die Last von seinen Schultern nehmen konnte, um sie mit Mut anzusehen und Stück für Stück zu bearbeiten. Ordnung im Hirn und Ruhe im Herzen schaffen. 
Ein Knäul Gedanken, ein großer Topf verschiedener Gefühle und ein unüberschaubarer Berg an Herausforderungen machen wir zu einzelnen Fäden, zu Teelöffelgröße, zu Kieselsteinen. 
      `);
  }, []);

  return (
    <Box sx={{ backgroundColor: '#FFF9D8', py: 8, marginTop: '100px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Profilbild links */}
          <Grid item xs={12} md={5}>
            <Avatar
              src={Profilbild}
              alt="Pia Carmen Martocchi"
              sx={{ width: '85%', height: 'auto', borderRadius: '10px' }}
            />
          </Grid>

          {/* Text rechts */}
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: 'left' }}>
              {/* Titel */}
              <Typography variant="h3" gutterBottom sx={{ color: '#5E9050', fontWeight: 'bold' }}>
                Über mich
              </Typography>

              <Divider sx={{ width: '50%', mb: 4, backgroundColor: '#5E9050' }} />

              {/* Beschreibungstext */}
              <Typography variant="body1" sx={{ color: '#333', mb: 4, lineHeight: 1.8 }}>
                {aboutMe}
              </Typography>

              {/* Werte und Philosophie */}
              <Box sx={{ backgroundColor: '#FFF9D8', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#5E9050', fontWeight: 'medium' }}>
                  Meine Werte & Philosophie
                </Typography>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                Ich bin empathisch und intuitiv, und ich werde dich nach dem Credo „No time for bullshit“ zu deiner wahren Größe bringen. Alles mit einer Prise meiner eigenen Neurodivergenz.                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe;
