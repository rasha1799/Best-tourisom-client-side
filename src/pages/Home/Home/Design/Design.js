import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import cc1 from '../../../../images/tourimages/fghg.jpg';
import cc2 from '../../../../images/tourimages/cjpg.jpg';
import cc3 from '../../../../images/tourimages/san.jpg';
const Design = () => {
    return (
        <div className="my-5  lg-4 sm-6 xsm-12">
            
<CardGroup>
  <Card>
    <Card.Img variant="top" src={cc1} />
    <Card.Body>
      <Card.Title>MISSION</Card.Title>
      <Card.Text>
      As a travel company, we exist to bring people together. When people come together, they create opportunities for shared experience, dialogue, and growth.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={cc2} />
    <Card.Body>
      <Card.Title>STORY</Card.Title>
      <Card.Text>
      Around the world, civil protests against ongoing social injustices continue to highlight the stark inequalities that prevent some people from being empowered participants in these opportunities.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={cc3} />
    <Card.Body>
      <Card.Title>Approach</Card.Title>
      <Card.Text>
      
We truly believe that social injustice and the COVID pandemic are linked by what they represent: Both reveal an infection we have yet to overcome. We all have a role to play i

      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
        
        </div>
    );
};

export default Design;