import React, { useEffect, useState } from 'react';
import './_video.scss';
import { AiFillEye } from 'react-icons/ai';
import moment from 'moment';
import numeral from 'numeral';

const Video = ({ video }) => {
  // Log the video object to inspect its structure
  console.log('Video prop:', video);

  // Destructure the video object safely with fallbacks
  const {
    id: { videoId } = {}, // Destructure videoId with a fallback
    snippet: {
      channelId = '',
      channelTitle = '',
      title = '',
      publishedAt = '',
      thumbnails: { medium = {} } = {}, // Destructure thumbnails with a fallback
    } = {},
  } = video || {}; // Add a fallback for the video object

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    if (!videoId) {
      console.warn('No videoId found:', videoId);
      return;
    }

    const getVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails,statistics&key=AIzaSyBW6PoHykghnW9E6Hg3T13CC65v3stHifY`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch video details');
        }
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setDuration(data.items[0].contentDetails.duration);
          setViews(data.items[0].statistics.viewCount);
        } else {
          console.warn('No video details found for id:', videoId);
        }
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    getVideoDetails();
  }, [videoId]);

  useEffect(() => {
    if (!channelId) {
      console.warn('No channelId found:', channelId);
      return;
    }

    const getChannelIcon = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&key=AIzaSyBW6PoHykghnW9E6Hg3T13CC65v3stHifY`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch channel icon');
        }
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setChannelIcon(data.items[0].snippet.thumbnails.default);
        } else {
          console.warn('No channel details found for id:', channelId);
        }
      } catch (error) {
        console.error('Error fetching channel icon:', error);
      }
    };

    getChannelIcon();
  }, [channelId]);

  // Format duration
  const formattedDuration = duration
    ? moment.utc(moment.duration(duration).asMilliseconds()).format('mm:ss')
    : '';

  return (
    <div className="video">
      <div className="video_top">
        <img src={medium.url} alt={title} />
        <span className="video_duration">{formattedDuration}</span>
      </div>
      <div className="video_title">{title}</div>
      <div className="video_details">
        <span>
          <AiFillEye /> {numeral(views).format('0.a')} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video_channel">
        <img src={channelIcon?.url} alt={channelTitle} />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video; // Export Video as default
