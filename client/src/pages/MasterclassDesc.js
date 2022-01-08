import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Container, ListGroup, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MASTERCLASS_ROUTE } from "../utils/consts";
import VogueImg from "../static/vogueLove.jpg";
import VogueImg2 from "../static/vogueLove2.jpg";
import DanceImg2 from "../static/dancehallLove.jpg";
import JFImg from "../static/jfLove.jpg";
import House from "../static/houseLove.jpg";

const MasterclassDesc = observer(() => {
  return (
    <Container>
      <h2 style={{ textAlign: "center", margin: "30px" }}>
        You can read more about styles!
      </h2>
      <ListGroup horizontal>
        <ListGroup.Item>
          <a href="#dancehall">Dancehall</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#vogue">Vogue</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#jf">Jazz Funk</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="#house">House</a>
        </ListGroup.Item>
      </ListGroup>
      <h3 style={{ marginTop: "30px", textAlign: "center" }}>Dance is love!</h3>
      <div style={{ marginTop: "30px" }}>
        <h4>
          Dancehall
          <a name="dancehall"></a>
        </h4>
        <div style={{ margin: "0 270px" }}>
          <Image src={DanceImg2} rounded />
        </div>
        <p>
          Dancehall is a popular dance genre springing out of English speaking
          Caribbean, and spearheaded from Jamaica. It is the mix and coming
          together of African retention dances of the region and Jamaica in
          particular, with popular culture, and youthful “innovation”. Dancehall
          functions as a form of physical and emotional therapy where dancers
          can release their pent-up frustrations. As such, it can be fun,
          innocent and energetic, but can also include themes of violence and
          hypersexuality. Many lyrics are explicit but are spoken in Jamaican
          patois which is a dialect of English that’s very different from its
          root language, so english-speakers often have a hard time
          understanding dancehall music. Below is a creative video where a
          dancer highlights a different dancehall move for each letter of the
          alphabet.
        </p>
        <h4>
          Vogue
          <a name="vogue"></a>
        </h4>
        <Image src={VogueImg} rounded />
        <Image src={VogueImg2} rounded style={{ marginLeft: "20px" }} />
        <p>
          Vogue, or voguing, is a highly stylized, modern house dance
          originating in the late 1980s that evolved out of the Harlem ballroom
          scene of the 1960s. It gained mainstream exposure when it was featured
          in Madonna's song and video "Vogue" (1990), and when showcased in the
          1990 documentary Paris Is Burning (which went on to win the Grand Jury
          Prize at the 1991 Sundance Film Festival). In its modern form, this
          dance has become a global phenomenon that continues to evolve both
          stylistically and demographically.
        </p>
        <h4>
          Jazz Funk
          <a name="jf"></a>
        </h4>
        <div style={{ margin: "0 250px" }}>
          <Image src={JFImg} rounded />
        </div>
        <p>
          Jazz Funk Dance is fierce, is cute, is powerful, is sensual and is a
          diva-like dance style. It takes elements from Hip Hop, Jazz, and
          Waacking. You get to be your own music industry star and forget
          everything else. This genre of dance gives you the chance to release
          sassiness and dance fiercely. Here’s a bit of Jazz Funk history for
          you. Nope, the dance style has nothing to do with the sub-genre of
          jazz music. Nor does it have much to do with pirouettes or arabesques.
          This commercial dance style derives from Hip Hop and Commercial Jazz
          Dancing (Think Paula Abdul). The term “Jazz Funk” was a patch solution
          to calm Hip Hop heads from saying “that’s not Hip Hop”. The only
          remote Funk association that could be made with the Funk would be
          Prince and his deep V-necks. These Choreographies have often highly
          syncopated musicality, involve intricate movements and exude lots of
          femininity. Some of the most influential Jazz Funk Dance
          choreographers so far have been Paula Abdul, Tina Landon with Janet
          Jackson, Brian Friedman with Britney Spears and Madonna, Jaquel Knight
          with Beyonce.
        </p>
        <h4>
          House
          <a name="house"></a>
        </h4>
        <div style={{ margin: "0 250px" }}>
          <Image src={House} rounded />
        </div>
        <p>
          House dance it's a modern dance style. It has been origin from the
          name of a style of electronic music in Chicago in the early 80s. The
          name of the style comes from the club Warehouse where in the first DJs
          started playing house music. The main elements of House dance include
          "jacking", "footwork", and "lofting".[3] The element of "jacking", or
          the "jack", – an ecstatic, sex-driven rippling movement of the torso –
          is the most famous dance move associated with early house music.[4][5]
          It has found its way onto numerous record titles like the Jack Trax EP
          by Chip E. (1985), "Jack'n the House" (1985) by Farley "Jackmaster"
          Funk (1985), "Jack Your Body" by Steve "Silk" Hurley (1986), or "Jack
          to the Sound of the Underground" by Fast Eddie (1988). House dance is
          often improvised and emphasizes fast and complex foot-oriented steps
          combined with fluid movements in the torso, as well as floor work.
          There is an emphasis on the subtle rhythms and riffs of the music, and
          the footwork follows them closely.
        </p>
        <div style={{ margin: "10px 0 30px" }}>
          <NavLink to={MASTERCLASS_ROUTE}>
            <Button variant="primary">Back to timetable</Button>
          </NavLink>
        </div>
      </div>
    </Container>
  );
});

export default MasterclassDesc;
