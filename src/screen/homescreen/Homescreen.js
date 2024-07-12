import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Video from '../../component/video/Video'; // Import as default export
import CategoriesBar from "../../component/categories bar/Categories";
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from '../../redux/actions/VideosAction';

const Homescreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector(state => state.homeVideos);

  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4} key={video.id}>
              <Video video={video} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Homescreen;
