import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get('http://localhost:8787/appointments');
        setMeetings(response.data);
      } catch (error) {
        console.error('Error fetching meetings:', error);
      }
    };

    fetchMeetings();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getMeetingColor = (meetingDate) => {
    const today = new Date();
    const meeting = new Date(meetingDate);

    const timeDifference = meeting.getTime() - today.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    if (daysDifference === 0) {
      return 'red';
    } else if (daysDifference <= 7) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  return (
    <div>
      <h1>Meeting List</h1>
      {meetings.sort((a, b) => new Date(a.date) - new Date(b.date)).map((meeting) => (
        <div key={meeting.id} style={{ color: getMeetingColor(meeting.date) }}>
          <h3>{meeting.serviceType}</h3>
          <p>Ordered by: {meeting.personName}</p>
          <p>Date: {formatDate(meeting.date)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default MeetingList;